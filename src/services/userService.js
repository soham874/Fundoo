import AxiosServices from './axiosService'

const axiosService = new AxiosServices()

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'

export default class UserService {

    //sends registration information to server
    registration = (data) => {
        return axiosService.post(`${baseUrl}user/userSignUp`, data)
    }

    //sends login information to server
    login = (data) => {
        return axiosService.post(`${baseUrl}user/login`, data)
    }
}