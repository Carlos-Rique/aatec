import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://postman-echo.com',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout : 10000
})

export default {
    postUser(user){
        return apiClient.post('/post', user)
    }
}