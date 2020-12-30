import api from '../services/api'
export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            return api().post('/api/auth/login', {email, password})
        }
    }
}
