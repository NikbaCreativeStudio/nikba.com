import { Directus } from '@directus/sdk';

const apiUrl = process.env.REACT_APP_API_URL
const apiToken = process.env.REACT_APP_API_TOKEN;

// Directus
const directus = new Directus(apiUrl, {
    auth: {
        staticToken: apiToken
    }
});

export const getFile = async (id) => {
    const response = await directus.items('directus_files').readOne(id).then((item) => {
        return item.data.full_url
    }).catch(error => {
        console.log(error)
    })
    return response
}