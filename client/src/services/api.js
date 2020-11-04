import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            get: {        // can be common or any other method
                Authorization: localStorage.getItem('auth-token')
            }
        }
    })
}
