import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-savy-4b5b4afdeea3.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();