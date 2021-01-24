<template>
  <nav style="height: 30px !important;" class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | date('datetime')}}</span>
      </div>
      <div class="wrapper-language">
        <button
          id="ru-lang"
          class="btn-lang"
          :class="{active: this.GET_LOCALE === 'ru'}"
          @click="changeLanguage"
        >
          RU
        </button>
        <button
          id="en-lang"
          class="btn-lang"
          :class="{active: this.GET_LOCALE === 'en'}"
          @click="changeLanguage"
        >
          EN
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "navbar",
  computed: {
    ...mapGetters(['GET_LOCALE'])
  },
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  methods: {
    ...mapActions(['LOCALE_ACTION']),
    changeLanguage() {
      if(this.$store.state.locale === 'ru') {
        localStorage.setItem('locale', 'en')
        this.LOCALE_ACTION('en')
        window.location.reload()
      } else {
        localStorage.setItem('locale', 'ru')
        this.LOCALE_ACTION('ru')
        window.location.reload()
      }
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    //this.dropdown = M.Dropdown.init(this.$refs.dropdown)
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if(this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>
<style scoped>
.wrapper-language {
}
.btn-lang {
  margin: 0.7rem;
  display: inline-block;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  color: black;
}
.active {
  font-weight: bold;
}
</style>
