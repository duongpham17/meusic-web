import { api } from '../api';
import { setAlert } from './alertActions';

import {
    USER,
    USER_ERRORS
} from './types';

export const userUpdateUsername = (data) => async dispatch => {
    dispatch({
        type: USER_ERRORS,
    });
    try{
        const res = await api.patch('/users/username', data);
        dispatch({
            type: USER,
            payload: res.data.user
        });
        dispatch(setAlert("Username updated"));
        return true;
    } catch(error) {
        dispatch({
            type: USER_ERRORS,
            payload: {username: error.response.data.message}
        });
    }
};

export const userRequestEmailChange = (data) => async dispatch => {
    try{
        await api.patch('/users/email', data);
        dispatch(setAlert("Email with code sent."))
        return true;
    } catch(error) {
        dispatch({
            type: USER_ERRORS,
            payload: {email: error.response.data.message}
        });
    }
};

export const userEmailConfirm = (data) => async dispatch => {
    try{
        const res = await api.patch('/users/email/confirm', data);
        dispatch({
            type: USER,
            payload: res.data.user
        });
        dispatch(setAlert("Email updated"))
        return true;
    } catch(error) {
        dispatch({
            type: USER_ERRORS,
            payload: {email: error.response.data.message}
        });
    }
};