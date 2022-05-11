import { api } from '../api';
import { setAlert } from './alertActions';

import {
    USER,
    USER_ERRORS
} from './types';

const clearErrors = (dispatch) => (
    dispatch({
        type: USER_ERRORS,
    })
);

export const userUpdateUsername = (data) => async dispatch => {
    clearErrors(dispatch);
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
    clearErrors(dispatch)
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
    clearErrors(dispatch)
    try{
        const res = await api.patch('/users/email/confirm', data);
        dispatch({
            type: USER,
            payload: res.data.user
        });
        dispatch(setAlert("Email updated."))
        return true;
    } catch(error) {
        dispatch({
            type: USER_ERRORS,
            payload: {email: error.response.data.message}
        });
    }
};

export const userUpdateCryptoAddress = (data) => async dispatch => {
    clearErrors(dispatch)
    try{
        const res = await api.patch('/users/crypto/address', data);
        dispatch({
            type: USER,
            payload: res.data.user
        });
        dispatch(setAlert("Crypto wallet linked."))
    } catch(error) {
        dispatch({
            type: USER_ERRORS,
            payload: {cryptoAddress: error.response.data.message}
        });
    }
};

export const userRemoveCryptoAddress = (address) => async dispatch => {
    try{
        const res = await api.patch(`/users/crypto/${address}`);
        dispatch({
            type: USER,
            payload: res.data.user
        });
        dispatch(setAlert("Address removed"));
    } catch(error){
        console.log(error);
    }
} 