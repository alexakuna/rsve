import api from '../services/api'
export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                return api().get('/api/auth/login', {email, password})
            } catch (e) {
                console.log(e)
            }
        }
        // async test({dispatch, commit}) {
        //
        //     return api().get('/api/history', {Authorization: localStorage.getItem('auth-token')})
        //
        // }
    }
}
