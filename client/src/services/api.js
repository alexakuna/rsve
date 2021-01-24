import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: 'http://localhost:5000', //https://rsve.herokuapp.com/
        headers: {
            post: {        // can be common or any other method
                Authorization: localStorage.getItem('auth-token')
            }
        }
    })
}
