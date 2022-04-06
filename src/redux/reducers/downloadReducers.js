import {
    DOWNLOAD_SONG_STARTED,
    DOWNLOAD_SONG_FINISHED
} from '../actions/types';

const initialState = [];

export const alert = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case DOWNLOAD_SONG_STARTED:
            return [...state, payload];
        case DOWNLOAD_SONG_FINISHED:
            return state.filter(i => i !== payload)

        default: 
            return state;
    }
}

export default alert;