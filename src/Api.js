// Import dependencies
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

const apiUrl = process.env.REACT_APP_API_URL
const apiToken = process.env.REACT_APP_API_TOKEN

const api = axios.create({
    adapter: cache.adapter
})

const getData = async (endpoint) => {
    const response = api({
        method: 'get',
        url: `${apiUrl}${endpoint}`,
        headers: {
            'Authorization': `Bearer ${apiToken}`
        }
    }).then(async (response) => {
        return response.data.data
    }).catch(error => {
        console.log(error)
    })

    return response    
}

export const getPage = async (pageId) => {
    const data = await getData('/items/pages/' + pageId)
    return data
}

export const getClients = async () => {
    const data = await getData('/items/clients')
    return data
}

export const getFiles = async (fileId) => {
    const data = await getData('/files/' + fileId)
    return data.data.full_url
}