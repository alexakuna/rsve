<template>
  <div>
    <div class="page-title">
      <h3>Навигация</h3>
      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <table>
      <thead>
      <tr>
        <th>Название</th>
        <th>Активная страница</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in NAME_TITLES.pages"
          :key="item.title"
        >
          <td>
            <div style="margin-bottom: 5px">{{item.title}}</div>
            <input
              :data-url="item.url"
              type="text"
              class="hide validate"
              data-length="10"
              @keyup.enter="onChangeTitle()"
            >
            <span style="padding-left: 5px" class="hide red-text">Поле не должно быть пустым и не более 10 символов</span>
            <button
              @click="onShowInputTitle($event)"
              type="button"
              class="btn waves-effect waves-light btn-small left"
            >
              <i class="material-icons">edit</i>
            </button>
            <button
                @click="onChangeTitle()"
                type="button"
                class="hide btn waves-effect waves-light btn-small left"
            >
              <i class="material-icons">send</i>
            </button>
          </td>
          <td>
            <div class="switch">
              <label class="left">
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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import messages from "@/utils/messages"
import {mapGetters} from 'vuex'
export default {
  name: "navigations",
  data: () => ({
    input: '',
    submit: '',
    error: ''
  }),
  computed: {
    ...mapGetters([
        'NAME_TITLES'
    ])
  },
  methods: {
    async onChange(e) {
      try {
        const response = await this.$store.dispatch('updateDataNavigations', {
          url: e.target.dataset.url,
          show: e.target.checked
        })
        if(response.status === 200) {
          this.$store.state.sidebar.pages = response.data.pages
          this.$done(messages[response.statusText])
        }
      } catch (e) {
        this.$error(e.response.data.message)
      }
    },
    onShowInputTitle(e) {
      const el = e.target
      const td = el.closest('td')
      if(el.tagName === 'BUTTON') {
        el.classList.add('hide')
      }
      if(el.tagName === 'I') {
        el.closest('button').classList.add('hide')
      }
      this.error = td.querySelector('span')
      this.input = td.querySelector('input')
      this.submit = td.querySelectorAll('button')[1]

      this.input.classList.remove('hide')
      this.submit.classList.remove('hide')
    },
    async onChangeTitle() {
      if(!this.input.value.length || this.input.value.length > 10) {
        this.error.classList.remove('hide')
        this.input.value = ''
        return
      }
      try {
        const response = await this.$store.dispatch('updateTileNavigations', {
          url: this.input.dataset.url,
          title: this.input.value
        })
        if(response.status === 200) {
          this.$store.state.sidebar.pages = response.data.pages
          this.$done(messages[response.statusText])
        }
      } catch (e) {
        this.$error(e.response.data.message)      }
    }
  },
  mounted() {
    this.$counter(this.$el.querySelectorAll('input[type=text]'))
  },
  updated() {
    this.$counter(this.$el.querySelectorAll('input[type=text]'))
  }
}
</script>

<style scoped>
</style>
