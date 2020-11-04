import axios from 'axios'
export default () => {
    return axios.create({
        method: 'post',
        baseURL: 'https://rsve.herokuapp.com/',
        headers: {
            get: {        // can be common or any other method
                Authorization: localStorage.getItem('auth-token')
            }
        }
    })
}
