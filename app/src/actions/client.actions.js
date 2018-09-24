import axios from 'axios';

import { apiUrl } from '../utils/http'
import { CLIENT_GET , CLIENT_CREATE } from '../constants/client.constans';


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
            const users = await axios(`${apiUrl}/clients`, "GET");
            dispatch(success(users.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};


const createClient = () => {
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
            const users = await axios(`${apiUrl}/clients`, "GET");
            dispatch(success(users.data));
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