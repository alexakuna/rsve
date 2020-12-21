import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import pages from "@/store/pages";
import reg from "@/store/regulations";
import api from "../services/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: [],
    regulations: [],
    user: localStorage.getItem('user') || ''
  },
  mutations: {
    SIDE_BAR_TITLES(store, titles) {
      store.sidebar = titles.data
    },
    REGULATIONS(store, regulations) {
      store.regulations = regulations.data
    },
    USER(store, user) {
      store.user = user
    }
  },
  actions: {
    GET_TITLES_PAGE({commit}) {
      api().get('/api', {Authorization: localStorage.getItem('auth-token')})
          .then(titles => {
            commit('SIDE_BAR_TITLES', titles)
            return titles
          })
          .catch(e => console.log(e))
    },
    GET_USER({commit}, user) {
      commit('USER', user)
      return user
    },
    GET_REGULATIONS_PAGES({commit}) {
      api().get('/api/regulations', {Authorization: localStorage.getItem('auth-token')})
          .then(regulations => {
            commit('REGULATIONS', regulations)
            return regulations
          })
          .catch(e => console.log(e))
    }
  },
  getters: {
    NAME_TITLES(state) {
      return state.sidebar
    },
    USER_NAME(state) {
      return state.user
    },
    DATA_REGULATIONS(state) {
      return state.regulations
    }
  },
  modules: {
    auth,
    pages,
    reg
  }
});
