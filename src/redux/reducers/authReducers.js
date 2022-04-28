import {
    AUTH_LOGIN,
    AUTH_SIGNUP,
    AUTH_ERROR,
    AUTH_CONFIRM,
    AUTH_SIGNUP_CLEAR,
} from '../actions/types';

const initialState = {
    isLoggedIn: false,
    login: "",
    signup: "",
    confirmation: "",
    error: "",
}

export const Auth = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){

        case AUTH_CONFIRM: 
            return{
                ...state,
                isLoggedIn: true
            };
        case AUTH_SIGNUP:
            return{
                ...state,
                signup: payload,
            }
        case AUTH_SIGNUP_CLEAR: 
            return{
                ...state,
                signup: ""
            }

        case AUTH_LOGIN: 
            return{
                ...state,
                login: payload
            }
        
        case AUTH_ERROR: 
            return{
                ...state,
                error: payload
            }
        

        default:
            return state;
        }
}

export default Auth