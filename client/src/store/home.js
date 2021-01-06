import api from '../services/api'
export default {
    actions: {
        async getHomeData({commit}) {
           api().get('/api/home').then(home => {
               commit('HOME', home)
               return home
           })
        }
    }
}
