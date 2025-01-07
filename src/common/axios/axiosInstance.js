import axios, { AxiosHeaders } from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://node-seven-chi.vercel.app/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

axiosInstance.interceptors.request.use(
    (config) => {
        if (!config.headers) {
            config.headers = {}
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default axiosInstance