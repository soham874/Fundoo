import axios from 'axios'

export default class axiosServices {

    post = (url, data) => {
        return axios.post(url, data)
    }


}