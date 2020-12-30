import api from '../services/api'
export default {
    actions: {
        updateDataNavigations({dispatch, commit}, {url, show}) {
            return api().patch('/api/update-titles', {url, show})
        },
        updateTileNavigations({dispatch, commit}, {url, title}) {
            return api().patch('/api/update-titles', {url, title})
        }
    }
}
