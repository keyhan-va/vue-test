import axios from 'axios'

const ajax = axios.create({
    baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : ''
})
ajax.interceptors.request.use(
    (config) => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        config.headers['Accept'] = 'application/json';
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
ajax.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});
export default ajax
