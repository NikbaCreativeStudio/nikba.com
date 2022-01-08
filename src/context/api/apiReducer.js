import {
    SHOW_LOADING,
    GET_CLIENTS,
    GET_PAGE,
    GET_SERVICES,
    GET_SERVICE,
    GET_WORKS,
    GET_WORK,
    GET_WORK_LAYERS

} from "../types";

const handlers = {
    // Loading
    [SHOW_LOADING]: state => ({ ...state, isLoading: true }),

    // Clients
    [GET_CLIENTS]: (state, { payload }) => ({ ...state, clients: payload, isLoading: false }),

    // Page
    [GET_PAGE]: (state, { payload }) => ({ ...state, page: payload, isLoading: false }),

    // Get Services
    [GET_SERVICES]: (state, { payload }) => ({ ...state, services: payload, isLoading: false }),
    [GET_SERVICE]: (state, { payload }) => ({ ...state, service: payload, isLoading: false }),

    // Get Works
    [GET_WORKS]: (state, { payload }) => ({ ...state, works: payload, isLoading: false }),
    [GET_WORK]: (state, { payload }) => ({ ...state, work: payload, isLoading: false }),
    [GET_WORK_LAYERS]: (state, { payload }) => ({ ...state, workLayers: payload, isLoading: false }),

    DEFAULT: state => state
};

export const apiReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.default;
    return handle(state, action);
};