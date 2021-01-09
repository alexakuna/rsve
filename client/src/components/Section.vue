<template>
  <form class="form-card" @submit.prevent="onSubmit">
    <div
        class="pre-loader"
        :class="{hide: isVisible}"
    >
      <Preloader/>
    </div>
    <div class="content-wrapper">

      <div class="card-content">
        <span class="card-title">Создание секции</span>
        <div class="input-field">
          <input
              id="title"
              type="text"
              v-model.trim="title"
              :class="{invalid: ($v.title.$dirty && !$v.title.required)} || ($v.title.$dirty && !$v.title.minLength) ||
                 ($v.title.$dirty && !$v.title.maxLength)"
          >
          <label for="title">Заголовок</label>
          <small
              class="helper-text invalid"
              v-if="($v.title.$dirty && !$v.title.required)"
          >Поле обязательно для заполнения
          </small>
          <small
              class="helper-text invalid"
              v-else-if="$v.title.$dirty && !$v.title.minLength"
          >Не менее 3 символов. Сейчас {{ title.length }}
          </small>
          <small
              class="helper-text invalid"
              v-else-if="$v.title.$dirty && !$v.title.maxLength"
          >Не более 20 символов. Сейчас {{ title.length }}
          </small>
        </div>
        <div class="input-field">
          <textarea
              rows="10" cols="33"
              id="description"
              type="text"
              v-model.trim="description"
              :class="{
              invalid:
               ($v.description.$dirty && !$v.description.required) ||
                ($v.description.$dirty && !$v.description.minLength) ||
                 ($v.description.$dirty && !$v.description.maxLength)}"></textarea>
          <label for="description">Параграф</label>
          <small
              class="helper-text invalid"
              v-if="$v.description.$dirty && !$v.description.required"
          >Поле не должно быть пустым
          </small>
          <small
              class="helper-text invalid"
              v-else-if="$v.description.$dirty && !$v.description.minLength"
          >Не менее 20 символов. Сейчас {{ description.length }}
          </small>
          <small
              class="helper-text invalid"
              v-else-if="$v.description.$dirty && !$v.description.maxLength"
          >Не более 250 символов. Сейчас {{ description.length }}
          </small>
        </div>
        <div class="input-field">
          <input
              id="img"
              type="text"
              v-model.trim="img"
              :class="{invalid: ($v.img.$dirty && !$v.img.required)}"
          >
          <label for="img">Ссылка на фото</label>
          <small
              class="helper-text invalid"
              v-if="$v.img.$dirty && !$v.img.required"
          >Поле не должно быть пустым
          </small>
        </div>
      </div>
      <div class="card-action">
        <div style="margin-bottom: 20px;">
          <button
              class="btn waves-effect waves-light auth-submit"
              type="submit"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Preloader from "./preloader";
import {mapActions} from 'vuex'
import messages from "@/utils/messages";
const {required, minLength, maxLength } = require('vuelidate/lib/validators')

export default {
name: "Section",
  data: () => ({
    title: '',
    description: '',
    img: '',
    isVisible: true
  }),
  validations: {
    title:{required, minLength: minLength(3),maxLength: maxLength(20)},
    description: {required, minLength: minLength(20),maxLength: maxLength(250)},
    img: {required}
  },
  components: {
  Preloader
  },
  methods: {
    ...mapActions([
        'createSection'
    ]),
    closeModal() {
      this.$emit('closeModal')
    },
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.isVisible = false
      try {
        const response = await this.createSection({
          title: this.title,
          description: [this.description],
          images: [this.img]
        })
        this.$store.state.home = response.data
        this.isVisible = true
        this.title = ''
        this.description = ''
        this.img = ''
        this.closeModal()
        this.$done(messages[response.statusText])
      } catch (e) {
        this.isVisible = true
        this.$error(e.response.data.message)
      }
    }
  }
}
</script>
<style scoped>
.form-card {
  width: 100%;
}
.content-wrapper {
  padding: 2rem;
}
textarea {
  resize: none;
  height: 10rem;
}
</style>
