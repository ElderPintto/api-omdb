import axios from 'axios';


const key = '?apikey=414955e6&s='
const axiosInstace = axios.create({
  baseURL: 'http://www.omdbapi.com/'
})

export const api = {
  get(endpoint){
    let query = `${key}${endpoint}`
    return axiosInstace.get(query)
  },
}