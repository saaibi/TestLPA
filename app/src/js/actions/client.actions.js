import { makeRequestAsync } from '../services'
import { CLIENT_GET, CLIENT_CREATE } from '../constants/client.constans';


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

    return async dispatch => {
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


const createClient = (client) => {
    const request = () => ({
        type: CLIENT_CREATE.REQUEST,
        payload: {
            clients: [],
            isLoading: true,
            error: '',
        },
    });

    const success = clients => ({
        type: CLIENT_CREATE.SUCCESS,
        payload: {
            clients,
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

    return async dispatch => {
        dispatch(request());
        try {
            const clients = await makeRequestAsync(`/clients`, "POST" , client);
            console.log(clients.data)
            dispatch(success(clients.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

export const clienActions = {
    getAllClient,
    createClient
}