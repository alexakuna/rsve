import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import api from "../services/api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: [],
    user: ''
  },
  mutations: {
    SIDE_BAR_TITLES(store, titles) {
      store.sidebar = titles.data
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
    }
  },
  getters: {
    NAME_TITLES(state) {
      return state.sidebar
    },
    USER_NAME(state) {
      return state.user
    }
  },
  modules: {
    auth
  }
});
