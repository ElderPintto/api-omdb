import axios from 'axios';


const key = '?apikey=414955e6&'
const axiosInstace = axios.create({
  baseURL: 'http://www.omdbapi.com/'
})

export const api = {
  get(query,endpoint){
    let queryString = `${key}${query}${endpoint}`
    return axiosInstace.get(queryString)
  },
}