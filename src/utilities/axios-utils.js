import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,    
})

export const auth_api = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
})