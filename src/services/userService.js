import AxiosServices from './axiosService'

const axiosService = new AxiosServices()

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user/'

export default class UserService {

    //sends registration information to server
    registration = (data) => {
        return axiosService.post(`${baseUrl}userSignUp`, data)
    }

    //sends login information to server
    login = (data) => {
        return axiosService.post(`${baseUrl}login`, data)
    }

    //sends reset email to server
    resetEmail = (data) => {
        return axiosService.post(`${baseUrl}reset`, data)
    }

    //sends reset password to server
    resetPassword = (data, token) => {
        return axiosService.post(`${baseUrl}reset-password`, data, {
            headers: {
                Authorization: token
            }
        })
    }
}