import {
    OPEN_CONTENT
} from '../actions/types';

const initialState = {
    id: "",
}

export const alert = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case OPEN_CONTENT:

            return {
                id: payload === state.id ? "" : payload
            }

        default: 
            return state;
    }
}

export default alert;