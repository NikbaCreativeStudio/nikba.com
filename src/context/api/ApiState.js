import { Directus } from '@directus/sdk';

import React, {useReducer} from 'react';

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
const apiToken = process.env.REACT_APP_API_TOKEN;

export const ApiState = ({children}) => {

    const initialState = {
        isLoading: false,
        clients: [],
        page: {},
        services: [],
        service: {},
        works: [],
        work: {},
        file: {}
    }

    const [state, dispatch] = useReducer(apiReducer, initialState);
    const showLoading = () => dispatch({type: SHOW_LOADING});

    // Directus
    const directus = new Directus(apiUrl, {
        auth: {
            staticToken: apiToken
        }
    });

    // Get Clients
    const getClients = async () => {
        showLoading();
        await directus.items('clients').readMany().then(res => {
            const payload = Object.keys(res.data).map(key => {
                return {
                    id: key,
                    ...res.data[key]
                }
            });
            dispatch({ type: GET_CLIENTS, payload });
        }).catch(error => {
            console.log(error);
        });
    }

    // Get Services
    const getServices = async () => {
        showLoading();
        await directus.items('services').readMany().then(res => {
            const payload = Object.keys(res.data).map(key => {
                return {
                    id: key,
                    ...res.data[key]
                }
            });
            dispatch({ type: GET_SERVICES, payload });
        }).catch(error => {
            console.log(error);
        });
    }

    // Get Service
    const getService = async (id) => {
        showLoading();
        await directus.items('services').readOne(id).then(res => {
        const payload = {
            id: id,
            ...res
        }
        dispatch({ type: GET_SERVICE, payload });
        }).catch(error => {
            console.log(error);
        });
    }

    // Get Works
    const getWorks = async () => {
        showLoading();
        await directus.items('works').readMany().then(res => {
            const payload = Object.keys(res.data).map(key => {
                return {
                    id: key,
                    ...res.data[key]
                }
            });
            dispatch({ type: GET_WORKS, payload });
        }).catch(error => {
            console.log(error);
        });
    }

    // Get Work
    const getWork = async (id) => {
        showLoading();
        await directus.items('works').readOne(id).then(res => {
            const payload = {
                id: id,
                ...res
            }
            dispatch({ type: GET_WORK, payload });
        }).catch(error => {
            console.log(error);
        });
    }


    // Get Page
    const getPage = async (id) => {
        showLoading();
        await directus.items(`pages`).readOne(id).then((res) => {
            const payload = { ...res };
            dispatch({ type: GET_PAGE, payload });
        }).catch(error => {
            console.log(error);
        });
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