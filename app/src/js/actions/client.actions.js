import { makeRequestAsync } from '../services'
import { CLIENT_GET, CLIENT_GETBYID, CLIENT_CREATE, CLIENT_UPDATE } from '../constants/client.constans';


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
            isLoading: true,
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
            isLoading: true,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const client = await makeRequestAsync(`/clients`, "POST", clientCreate);
            dispatch(success(client.data.client));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const updateClient = (id, clientUpdate) => {
    
    const request = () => ({
        type: CLIENT_UPDATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = client => ({
        type: CLIENT_UPDATE.SUCCESS,
        payload: {
            client,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: CLIENT_UPDATE.FAILURE,
        payload: {
            isLoading: true,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            console.log(clientUpdate)
            const client = await makeRequestAsync(`/clients/${id}/client`, "PUT", clientUpdate);
            console.log(client)
            // dispatch(success(client.data.client));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

export const clienActions = {
    getAllClient,
    getById,
    createClient,
    updateClient,
}