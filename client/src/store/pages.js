import api from '../services/api'
export default {
    actions: {
        updateDataNavigations({dispatch, commit}, {url, show, locale}) {
            return api().patch('/api/update-titles', {url, show, locale})
        },
        updateTileNavigations({dispatch, commit}, {url, title, locale}) {
            return api().patch('/api/update-titles', {url, title, locale})
        }
    }
}
