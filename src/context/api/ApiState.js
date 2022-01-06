import React, {useReducer} from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import {ApiContext} from './apiContext';
import {apiReducer} from './apiReducer';
import {
        SHOW_LOADING,
        GET_CLIENTS,
        GET_PAGE,
        GET_SERVICES,
        GET_SERVICE,
        GET_WORKS,
        GET_WORK,
        } 
        from "../types";

const apiUrl = process.env.REACT_APP_API_URL
const apiToken = 'Bearer '.concat(process.env.REACT_APP_API_TOKEN);

const cache = setupCache({ maxAge: 15 * 60 * 1000 })
const api = axios.create({ adapter: cache.adapter })

export const ApiState = ({children}) => {

    const initialState = {
        isLoading: false,
        clients: [],
        page: {},
        services: [],
        service: {},
        works: [],
        work: {},
    }

    const [state, dispatch] = useReducer(apiReducer, initialState);
    const showLoading = () => dispatch({type: SHOW_LOADING});


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
        const res = await getData('/items/clients')
        const payload = Object.keys(res).map(key => {
            return {
                id: key,
                ...res[key]
            }
        });
        dispatch({ type: GET_CLIENTS, payload });
    }

    // Get Services
    const getServices = async () => {
        showLoading();
        const res = await getData('/items/services')
        const payload = Object.keys(res).map(key => {
            return {
                id: key,
                ...res[key]
            }
        });
        dispatch({ type: GET_SERVICES, payload });
    }

    // Get Service
    const getService = async (id) => {
        showLoading();
        const res = await getData(`/items/services/${id}`)
        const payload = {
            id: id,
            ...res
        }
        dispatch({ type: GET_SERVICE, payload });
    }

    // Get Works
    const getWorks = async () => {
        showLoading();
        const res = await getData('/items/works')
        const payload = Object.keys(res).map(key => {
            return {
                id: key,
                ...res[key]
            }
        });
        dispatch({ type: GET_WORKS, payload });
    }

    // Get Work
    const getWork = async (id) => {
        showLoading();
        const res = await getData(`/items/works/${id}`)
        const payload = {
            id: id,
            ...res
        }
        dispatch({ type: GET_WORK, payload });
    }


    // Get Page
    const getPage = async (id) => {
        showLoading();
        const res = await getData(`/items/pages/${id}`)
        const payload = { ...res };
        dispatch({ type: GET_PAGE, payload });
    }


    return (
        <ApiContext.Provider value={{
            showLoading, getClients, getPage, getServices, getService, getWorks, getWork,
            isLoading: state.isLoading,
            clients: state.clients,
            page: state.page,
            services: state.services,
            service: state.service,
            works: state.works,
            work: state.work,
        }}>
            {children}
        </ApiContext.Provider>
    );
};