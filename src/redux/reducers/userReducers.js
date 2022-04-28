import {
    USER,
    USER_ERRORS
} from '../actions/types';
    
const initialState = {
    user: "",
    errors: ""
}
    
export const User = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case USER:
            return{
                ...state,
                user: payload
            }

        case USER_ERRORS:
            return{
                ...state,
                errors: payload || "",
            }

        default:
            return state;
        }
}

export default User;