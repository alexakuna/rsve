import axios from 'axios'
export default () => {
    axios.defaults.headers.common['Access-Control-Request-Method'] = '*'
    return axios.create({
        baseURL: 'https://rsve.herokuapp.com/',
        headers: {
            get: {        // can be common or any other method
                Authorization: localStorage.getItem('auth-token')
            }
        }
    })
}
