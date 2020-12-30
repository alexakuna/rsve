import api from '../services/api'
export default {
    actions: {
        async isShow({dispatch, commit}, {url, show}) {
            return api().patch('/api/regulations/update-regulations', {url, show})
        },
        async updateTileRegulation({dispatch, commit}, {url, title}) {
            return api().patch('/api/regulations/update-regulations', {url, title})
        },
        async updateImgLink({dispatch, commit}, {url, img}) {
            return api().patch('/api/regulations/update-regulations', {url, img})
        },
        async getRegulationData({dispatch, commit},{id}) {
            return api().post('/api/regulations/regulation', {id})
        },
        async updateRegulationData({dispatch, commit}, {id, index, name, name2, value, candidate}) {
            return api().patch('/api/regulations/regulation/number', {id, index, name, name2, value, candidate})
        }
    }
}
