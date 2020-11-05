import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: 'https://rsve.herokuapp.com',
        headers: {
            get: {        // can be common or any other method
                Authorization: localStorage.getItem('auth-token')
            }
        }
    })
}
