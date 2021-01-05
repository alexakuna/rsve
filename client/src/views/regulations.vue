<template>
  <div class="row">
    <div class="modal">
      <regulation />
    </div>

    <div class="page-title">
      <h3>Положение</h3>
    </div>
      <div
        class="col s12 m6 l4"
        v-for="(item, index) in DATA_REGULATIONS.regulations"
        :key="item.url"
      >
        <div class="card-panel white">
          <div class="wrapper-img">
            <img alt="Положение" width="100%" :src="item.img">
            <a
              class="btn-small waves-effect waves-light change-img"
              @click="showImgInput($event)"
            ><i class="material-icons">edit</i></a>
          </div>

          <div class="row hide div-udt-title">
            <div class="input-field col s12">
              <input
                :data-url="item.url"
                :id="item.url"
                type="text"
                class="validate"
                @keyup.enter="changeImg()"
              >
              <button
                class="btn-small btn-sending"
                @click="changeImg()"
              >
                <i class="material-icons">send</i>
              </button>
              <label :for="item.url">Ссылка на фото</label>
            </div>
          </div>

          <span style="font-size: 16px;">{{item.title}}</span>
          <a
            class="btn-flat pointer"
            @click="showTitleInput($event)"
          >
            <i class="material-icons">edit</i>
          </a>
          <div class="row hide div-udt-name">
            <div class="input-field col s12">
              <input
                :data-url="item.url"
                :id="item.url + index"
                type="text"
                data-length="15"
                @keyup.enter="changeTitleRegulation()"
              >
              <button
                  class="btn-small btn-sending"
                  @click="changeTitleRegulation()"
              >
                <i class="material-icons">send</i>
              </button>
              <span style="padding-left: 5px" class="hide red-text">Поле не должно быть пустым и не более 15 символов</span>
              <label :for="item.url + index">Имя положения</label>
            </div>
          </div>
          <div class="switch right">
            <label>
              Выкл.
              <input
                :data-url="item.url"
                type="checkbox"
                @change="onChange($event)"
                :checked="item.show"
              >
              <span class="lever"></span>
              Вкл.
            </label>
          </div>
          <div class="divider"></div>
          <div style="margin-bottom: 0" class="btn-wrapper row">
            <a
              class="waves-effect waves-light btn btn-small"
              :data-id="item.id"
              @click="getSomeRegulation($event)"
            >Редактировать</a>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import regulation from "@/components/regulation";
import {mapActions, mapGetters} from 'vuex'
import messages from "@/utils/messages";
export default {
  name: "regulations",
  components: {
    regulation
  },
  data: () => ({
    div: '',
    div2: '',
    input1: '',
    input2: '',
    error: '',
    modal: ''
  }),
  computed: {
    ...mapGetters([
      'DATA_REGULATIONS'
    ])
  },
  methods: {
    ...mapActions([
        'GET_REGULATIONS_PAGES'
    ]),
    async onChange(e) {
      try {
        const response = await this.$store.dispatch('isShow', {
          url: e.target.dataset.url,
          show: e.target.checked
        })
        if(response.status === 200) {
          this.$store.state.regulations = response.data
          this.$done(messages[response.statusText])
        }
      } catch (e) {
        this.$error(e.response.data.message)
      }
    },
    async changeImg() {
      if(!this.input1.value.length) {
        this.input1.classList.add('invalid')
        this.$error('Поле не должно быть пустым')
        return
      } else {
        this.input1.classList.remove('invalid')
      }
      const str = this.input1.value.indexOf('d/')
      const str2 = this.input1.value.lastIndexOf('/view')
      const result = this.input1.value.substring(str + 2, str2)
      try {
        const response = await this.$store.dispatch('updateImgLink', {
          url: this.input1.dataset.url,
          img: `https://docs.google.com/uc?id=${result}`
        })
        if(response.status === 200) {
          this.$store.state.regulations = response.data
          this.$done(messages[response.statusText])
          this.input1.value = ''
          this.div.classList.add('hide')
        }
      } catch (e) {
        this.$error(e.response.data.message)
        this.input1.value = ''
      }
    },
    async changeTitleRegulation() {
      if(!this.input2.value.length || this.input2.value.length > 15) {
        this.error.classList.remove('hide')
        this.input2.value = ''
        return
      }
      try {
        const response = await this.$store.dispatch('updateTileRegulation', {
          url: this.input2.dataset.url,
          title: this.input2.value
        })
        if(response.status === 200) {
          this.$store.state.regulations = response.data
          this.$done(messages[response.statusText])
          this.input2.value = ''
          this.div2.classList.add('hide')
        }
      } catch (e) {
        this.$error(e.response.data.message)
        this.input2.value = ''
      }
    },
    showImgInput(e) {
      const el = e.target
      this.div = el.closest('div').nextSibling
      this.input1 = this.div.querySelector('input')
      if(el.tagName === 'A' || el.tagName === 'I') {
        this.div.classList.remove('hide')
      }
    },
    showTitleInput(e) {
      const el = e.target
      this.div2 = el.closest('div').querySelector('.div-udt-name')
      this.input2 = this.div2.querySelector('input')
      this.error = this.div2.querySelector('span')
      if(el.tagName === 'A' || el.tagName === 'I') {
        this.div2.classList.remove('hide')
      }
    },
    async getSomeRegulation(e) {
      const id = e.target.dataset.id
      try {
        const response = await this.$store.dispatch('getRegulationData', {id})
        this.$store.state.regulation = response.data
        this.modal = this.$popup()
        const win = this.modal.init(this.$el.querySelector('.modal'))
        win.open()
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.GET_REGULATIONS_PAGES()
    this.$counter(this.$el.querySelectorAll('input[type=text]'))
  },
  updated() {
    this.$counter(this.$el.querySelectorAll('input[type=text]'))
  }
}
</script>

<style scoped>
.divider {
  margin-bottom: 12px;
  width: 100%;
}
.lever {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.wrapper-img {
  position: relative;
}
.change-img {
  position: absolute;
  top: 10px;
  right: 10px;
}
.div-udt-title button {
  position: absolute;
  top: 0;
  right: 10px;
}
.div-udt-title, .div-udt-name {
  margin-bottom: 0 !important;
}
.div-udt-name button {
  position: absolute;
  top: 0;
  right: 10px;
}
.switch {
  margin-bottom: 18px !important;
}
.modal {
  width: 80% !important;
}
@media only screen and (max-width: 992px) {
  .modal {
    width: 95% !important;
  }
}
</style>
