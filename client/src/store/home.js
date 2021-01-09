import api from '../services/api'
export default {
    actions: {
        async getHomeData({commit}) {
           api().get('/api/home').then(home => {
               commit('HOME', home)
               return home
           })
        },
        async removeSection({commit},{index}) {
           return api().post('/api/delete-section', {index})
        },
        createSection({commit},{title, description, images}) {
           return api().post('/api/create-section', {title, description, images})
        }
    }
}
