import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import pages from "@/store/pages";
import reg from "@/store/regulations";
import homes from "@/store/home";
import api from "../services/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isVisible: true,
    home: [],
    sidebar: [],
    regulations: [],
    regulation: [],
    user: localStorage.getItem('user') || '',
    locale: localStorage.getItem('locale') || ''
  },
  mutations: {
    LOCALE_LANG(store, locale) {
      store.locale = locale
    },
    SIDE_BAR_TITLES(store, titles) {
      store.sidebar = titles.data
    },
    REGULATIONS(store, regulations) {
      store.regulations = regulations.data
    },
    USER(store, user) {
      store.user = user
    },
    HOME(store, home) {
      store.home = home.data
    }
  },
  actions: {
    GET_TITLES_PAGE({commit}) {
      api().post('/api',{locale: this.state.locale}, {Authorization: localStorage.getItem('auth-token')})
          .then(titles => {
            commit('SIDE_BAR_TITLES', titles)
            return titles
          })
          .catch(e => console.log(e))
    },
    LOCALE_ACTION({commit}, locale) {
      commit('LOCALE_LANG', locale)
      return locale
    },
    GET_USER({commit}, user) {
      commit('USER', user)
      return user
    },
    GET_REGULATIONS_PAGES({commit}) {
      api().post('/api/regulations', {locale: this.state.locale},{Authorization: localStorage.getItem('auth-token')})
          .then(regulations => {
            commit('REGULATIONS', regulations)
            return regulations
          })
          .catch(e => console.log(e))
    }
  },
  getters: {
    GET_LOCALE(state) {
      return state.locale
    },
    MODAL(state) {
      return state.isVisible
    },
    NAME_TITLES(state) {
      return state.sidebar
    },
    USER_NAME(state) {
      return state.user
    },
    DATA_REGULATIONS(state) {
      return state.regulations
    },
    REGULATION_DATA(state) {
      return state.regulation
    },
    HOME_DATA(state) {
      return state.home
    }
  },
  modules: {
    auth,
    pages,
    reg,
    homes
  }
});
