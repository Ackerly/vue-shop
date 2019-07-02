import axios from 'axios' // axios http请求库

const api = axios.create()
api.defaults.baseURL = 'http://api.com' // 设置默认请求的url

export default api
