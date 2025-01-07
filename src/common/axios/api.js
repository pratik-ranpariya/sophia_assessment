import axiosInstance from './axiosInstance'

export const Get = async (url, params, headers) => {
    try {
        const response = await axiosInstance.get(url, { params, headers })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const Post = async (
    url,
    body,
    headers,
) => {
    try {
        const response = await axiosInstance.post(url, body, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json',
            },
        })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}

export const Put = async (
    url,
    body,
    headers
) => {
    try {
        const response = await axiosInstance.put(url, body, {
            headers: {
                ...headers,
                'Content-Type': headers?.['Content-Type'] || 'application/json',
            },
        })
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
        }
    } catch (error) {
        throw error
    }
}