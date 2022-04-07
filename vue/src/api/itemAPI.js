import axios from 'axios'

export const getItem = () => {
    return axios({
        url: 'http://localhost:3008/',
        method: 'GET'
    })
}