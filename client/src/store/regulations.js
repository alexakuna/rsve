import api from '../services/api'
export default {
    actions: {
        async isShow({dispatch, commit}, {url, show, locale}) {
            return api().patch('/api/regulations/update-regulations', {url, show, locale})
        },
        async updateTileRegulation({dispatch, commit}, {url, title, locale}) {
            return api().patch('/api/regulations/update-regulations', {url, title, locale})
        },
        async updateImgLink({dispatch, commit}, {url, img, locale}) {
            return api().patch('/api/regulations/update-regulations', {url, img, locale})
        },
        async getRegulationData({dispatch, commit},{id}) {
            return api().post('/api/regulations/regulation', {id})
        },
        async updateRegulationData({dispatch, commit}, {id, index, name, name2, value, candidate}) {
            return api().patch('/api/regulations/regulation/number', {id, index, name, name2, value, candidate})
        }
    }
}
