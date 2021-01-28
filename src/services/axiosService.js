import axios from 'axios'

export default class axiosServices {

    post = (url, data, isHeaderRequired = false) => {
        return axios.post(url, data, isHeaderRequired)
    }

    get = (url, isHeaderRequired) => {
        return axios.get(url, isHeaderRequired)
    }
}