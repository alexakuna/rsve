import api from '../services/api'
export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                return api().post('/api/auth/login', {email, password})
            } catch (e) {
                console.log(e)
            }
        }
    }
}
