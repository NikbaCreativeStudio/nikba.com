import React, { useReducer } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import { ApiContext } from './apiContext';
import { apiReducer } from './apiReducer';
import {
    SHOW_LOADING,
    GET_CLIENTS,
    GET_PAGE,
    GET_SERVICES,
    GET_SERVICE,
    GET_WORKS,
    GET_WORK,
    GET_WORK_LAYERS
}
    from "../types";

const apiUrl = process.env.REACT_APP_API_URL
const apiToken = 'Bearer '.concat(process.env.REACT_APP_API_TOKEN);

const cache = setupCache({ maxAge: 15 * 60 * 1000 })
const api = axios.create({ adapter: cache.adapter })

export const ApiState = ({ children }) => {

    const initialState = {
        isLoading: false,
        clients: [],
        page: {},
        services: [],
        service: {},
        works: [],
        work: {},
        workLayers: [],
    }

    const [state, dispatch] = useReducer(apiReducer, initialState);
    const showLoading = () => dispatch({ type: SHOW_LOADING });


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

    // Get Clients
    const getClients = async () => {

        showLoading();

        await getData('/items/clients').then(res => {
            const payload = Object.keys(res).map(key => {
                return {
                    id: key,
                    ...res[key]
                }
            });
            dispatch({ type: GET_CLIENTS, payload })
        }).catch(error => {
            console.log(error)
        })
    }

    // Get Services
    const getServices = async () => {

        showLoading();

        await getData('/items/services').then(res => {
            const payload = Object.keys(res).map(key => {
                return {
                    id: key,
                    ...res[key]
                }
            })
            dispatch({ type: GET_SERVICES, payload })
        }).catch(error => {
            console.log(error)
        })
    }

    // Get Service
    const getService = async (id) => {
        showLoading();
        await getData(`/items/services/${id}`).then(res => {
            const payload = {
                id: id,
                ...res
            }
            dispatch({ type: GET_SERVICE, payload })
        }).catch(error => {
            console.log(error)
        })
    }

    // Get Works
    const getWorks = async () => {
        showLoading();
        await getData('/items/works').then(res => {
            const payload = Object.keys(res).map(key => {
                return {
                    id: key,
                    ...res[key]
                }
            })
            dispatch({ type: GET_WORKS, payload })
        }).catch(error => {
            console.log(error)
        })
    }

    // Get Work
    const getWork = async (id) => {
        showLoading();
        await getData(`/items/works/${id}`).then(res => {
            const payload = {
                id: id,
                ...res
            }
            dispatch({ type: GET_WORK, payload })
        }).catch(error => {
            console.log(error)
        })
    }

    // Get Work Layers
    const getWorkLayers = async (id) => {
        showLoading();
        await getData(`/items/works_files?filter[works_id]=${id}`).then(res => {
            const payload = Object.keys(res).map(key => {
                return {
                    id: key,
                    ...res[key]
                }
            })
            dispatch({ type: GET_WORK_LAYERS, payload })
        }).catch(error => {
            console.log(error)
        })
    }


    // Get Page
    const getPage = async (id) => {

        showLoading();

        await getData(`/items/pages/${id}`).then(res => {
            const payload = { ...res }
            dispatch({ type: GET_PAGE, payload })
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <ApiContext.Provider value={{
            showLoading, getClients, getPage, getServices, getService, getWorks, getWork, getWorkLayers,
            isLoading: state.isLoading,
            clients: state.clients,
            page: state.page,
            services: state.services,
            service: state.service,
            works: state.works,
            work: state.work,
            workLayers: state.workLayers
        }}>
            {children}
        </ApiContext.Provider>
    );
};