import axios from 'axios';

import { apiUrl } from '../utils/http'
import { OBTENER_CLIENT } from '../constants/client.constans';


const getAllClient = () => {
    const request = () => ({ type: OBTENER_CLIENT.REQUEST });
    const success = users => ({ type: OBTENER_CLIENT.SUCCESS, users });
    const failure = error => ({ type: OBTENER_CLIENT.FAILURE, error });

    return async dispatch => {
        dispatch(request());
        try {
            console.log("############")
            const users = await axios(`${apiUrl}/clients`, "GET");
            console.log(users)
            dispatch(success(users.data));
        } catch (error) {
            const message = handleError(error, "Unregistered user");
            dispatch(failure({ error: message }));
        }
    };
};

export const clienActions = {
    getAllClient
}