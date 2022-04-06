import {
    USER_LOAD,
    USER_UPDATE,
    USER_ERRORS
} from '../actions/types';
    
const initialState = {
    user: null,
    errors: null
}
    
export const User = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case USER_LOAD:
        case USER_UPDATE:
            return{
                ...state,
                user: payload
            }

        case USER_ERRORS:
            return{
                ...state,
                errors: payload
            }

        default:
            return state;
        }
}

export default User;