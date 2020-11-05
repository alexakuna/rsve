import api from '../services/api'
import axios from 'axios'
export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                return axios.post('/api/auth/login', {email, password})
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
