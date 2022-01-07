import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const apiUrl = process.env.REACT_APP_API_URL
const apiToken = 'Bearer '.concat(process.env.REACT_APP_API_TOKEN);

const cache = setupCache({ maxAge: 15 * 60 * 1000 })
const api = axios.create({ adapter: cache.adapter })


// Main Get Data Functions
const getData = async (endpoint) => {
    const response = api({
        method: 'get',
        url: `${apiUrl}${endpoint}`,
        headers: {
            Authorization: apiToken
        }
    }).then(async (response) => {
        return response.data.data
    }).catch(error => {
        console.log(error)
    })

    return response    
}

export const getFile = async (id) => {
    const response = await getData(`/files/${id}`);
    return response.data.full_url;
}