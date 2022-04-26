import {api} from '../api';

import {
    USER,

    AUTH_LOGIN,
    AUTH_ERROR,
    AUTH_SIGNUP,
    AUTH_CONFIRM,
    AUTH_SIGNUP_CLEAR

} from './types';

export const authClearError = () => async dispatch => {
    dispatch({
        type: AUTH_ERROR,
        payload: ""
    });
};

export const authSignupClear = () => async dispatch => {
    dispatch({
        type: AUTH_SIGNUP_CLEAR,
    })
};

export const authLoadUser = () => async dispatch => {
    try{
        const res = await api.get(`/auth/persist`);
        dispatch({
            type: AUTH_CONFIRM,
        });
        dispatch({
            type: USER,
            payload: res.data.user
        });
    } catch(error) {
        console.log("cant login")
    }
};

export const authLogin = (data) => async dispatch => {
    try{
        const res = await api.post('/auth/login/email', data);
        dispatch({
            type: AUTH_LOGIN,
            payload: res.data.message
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                login: {
                    email: error.response.data.message.includes("Invalid") ? "Something went wrong" : error.response.data.message
                } 
            }
        });
    }
};

export const authSignupUsername = (data) => async dispatch => {
    try {
        const res = await api.post(`/auth/signup/username`, data);
        dispatch({
            type: AUTH_SIGNUP,
            payload: res.data.message
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                signup: {
                    username: error.response.data.message
                } 
            }
        });
    }
};

export const authSignupEmail = (data) => async dispatch => {
    try {
        const res = await api.post(`/auth/signup/email`, data);
        dispatch({
            type: AUTH_SIGNUP,
            payload: res.data.message
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                signup: {
                    email: error.response.data.message
                } 
            }
        });
    }
};

export const authConfirmEmail = (code) => async dispatch => {
    try{
        const res = await api.post(`/auth/confirm/${code}`);
        dispatch({
            type: AUTH_CONFIRM,
        }); 
        localStorage.setItem("user", JSON.stringify(res.data.cookie));
        window.location = '/';
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: AUTH_ERROR,
            payload: {
                confirm: {
                    token: error.response.data.message
                } 
            }
        });
    }
};

export const authConfirmCode = (data) => async dispatch => {
    try{
        const res = await api.post(`/auth/confirm`, data);
        dispatch({
            type: AUTH_CONFIRM,
        }); 
        localStorage.setItem("user", JSON.stringify(res.data.cookie));
        window.location = '/';
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: {
                confirm: {
                    code: "Invalid code"
                } 
            }
        });
    }
}

export const authLogout = () => async dispatch => {
    try {
        localStorage.removeItem("user");
        window.location = '/';
    } catch (err) {
        console.log("something went wrong")
    }
}
