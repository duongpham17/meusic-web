import {
    THEME_CHANGE
} from '../actions/types';

const initialState = {
    theme: localStorage.getItem("theme") || "light"
}

export const Theme = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case THEME_CHANGE:
            return{
                ...state,
                theme: payload
            }

        default:
            return state;
        }
}

export default Theme