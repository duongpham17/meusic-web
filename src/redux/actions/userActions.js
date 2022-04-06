import { api } from '../api';
import { setAlert } from './alertActions';

import {
    USER_UPDATE,
    USER_ERRORS
} from './types';

export const userUpdateUsername = (data) => async dispatch => {
    dispatch({
        type: USER_ERRORS,
        payload: ""
    });
    try{
        const res = await api.patch('/users/username', data);
        dispatch({
            type: USER_UPDATE,
            payload: res.data.user
        });
        dispatch(setAlert("Username updated"))
    } catch(error) {
        dispatch({
            type: USER_ERRORS,
            payload: {username: error.response.data.message}
        });
        dispatch(setAlert("Username taken"))
    }
};
