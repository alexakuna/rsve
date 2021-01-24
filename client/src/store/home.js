import api from '../services/api'
export default {
    actions: {
        async getHomeData({commit}, {locale}) {
           api().post('/api/home', {locale}).then(home => {
               commit('HOME', home)
               return home
           })
        },
        async removeSection({commit},{index, locale}) {
           return api().post('/api/delete-section', {index, locale})
        },
        async createSection({commit},{title, description, images, locale}) {
           return api().post('/api/create-section', {title, description, images, locale})
        }
    }
}
