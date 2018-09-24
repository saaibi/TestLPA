import axios from 'axios';

import { apiUrl } from '../utils/http'
import { OBTENER_CLIENT } from '../constants/client.constans';


const getAllClient = () => {
    const request = () => ({
        type: OBTENER_CLIENT.REQUEST,
        payload: {
            clients: [],
            isLoading: true,
            error: '',
        },
    });

    const success = clients => ({
        type: OBTENER_CLIENT.SUCCESS,
        payload: {
            clients,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: OBTENER_CLIENT.FAILURE,
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
    getAllClient
}