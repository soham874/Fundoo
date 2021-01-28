import AxiosServices from './axiosService'

const axiosService = new AxiosServices()

const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/'

export default class UserService {

    //sends new note to server
    createNote = (data, token) => {
        return axiosService.post(`${baseUrl}addNotes`, data, {
            headers: {
                Authorization: token
            }
        })
    }

    //receives note lists
    getNotes = (token) => {
        return axiosService.get(`${baseUrl}getNotesList`, {
            headers: {
                Authorization: token
            }
        })
    }
}