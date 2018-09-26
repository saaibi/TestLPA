import findIndex from 'lodash/findIndex'
import { makeRequestAsync } from '../services'
import { CLIENT_GET, CLIENT_GETBYID, CLIENT_CREATE, CLIENT_UPDATE, CLIENT_DELETE } from '../constants/client.constans';


const getAllClient = () => {
    const request = () => ({
        type: CLIENT_GET.REQUEST,
        payload: {
            clients: [],
            isLoading: true,
            error: '',
        },
    });

    const success = clients => ({
        type: CLIENT_GET.SUCCESS,
        payload: {
            clients,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: CLIENT_GET.FAILURE,
        payload: {
            isLoading: true,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const clients = await makeRequestAsync(`/clients`, "GET");
            dispatch(success(clients.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const getById = (id) => {
    const request = () => ({
        type: CLIENT_GETBYID.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = client => ({
        type: CLIENT_GETBYID.SUCCESS,
        payload: {
            client,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: CLIENT_GETBYID.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const client = await makeRequestAsync(`/clients/${id}`, "GET");
            dispatch(success(client.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};


const createClient = (clientCreate) => {
    const request = () => ({
        type: CLIENT_CREATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = client => ({
        type: CLIENT_CREATE.SUCCESS,
        payload: {
            client,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: CLIENT_CREATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const client = await makeRequestAsync(`/clients`, "POST", clientCreate);
            dispatch(success(client.data.client));
            M.toast({html: `${client.data.status}`, classes: 'rounded'});
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const updateClient = (client_id, clientUpdate) => {

    const request = () => ({
        type: CLIENT_UPDATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, client) => ({
        type: CLIENT_UPDATE.SUCCESS,
        payload: {
            client,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: CLIENT_UPDATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { clients } = getState().client;
            const index = findIndex(clients, { _id: client_id });

            if (index === -1) return dispatch(failure("User Not found"));

            const client = await makeRequestAsync(`/clients/${client_id}/client`, "PUT", clientUpdate);
            dispatch(success(index, client.data.client));
            M.toast({html: `${client.data.status}`, classes: 'rounded'});
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};


const deleteClient = (client_id) => {
    const request = () => ({
        type: CLIENT_DELETE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = index => ({
        type: CLIENT_DELETE.SUCCESS,
        payload: {
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: CLIENT_DELETE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { clients } = getState().client;
            const index = findIndex(clients, { _id: client_id });

            if (index === -1) return dispatch(failure("User Not found"));

            const client = await makeRequestAsync(`/clients/${client_id}`, "DELETE");
            dispatch(success(index));
            M.toast({html: `${client.data.status}`, classes: 'rounded'});
        } catch (error) {
            const message = error.message || error;
            dispatch(failure(message));
        }
    };
};

export const clienActions = {
    getAllClient,
    getById,
    createClient,
    updateClient,
    deleteClient
}