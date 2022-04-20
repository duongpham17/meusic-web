import {
    UTILS_THEME_CHANGE,
    UTILS_OPEN_CONTENT,
    UTILS_DOWNLOAD_SONG_STARTED,
    UTILS_DOWNLOAD_SONG_FINISHED,
} from '../actions/types';

const initialState = {
    theme: "",
    open: "",
    download: [],
};

export const Utils = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case UTILS_THEME_CHANGE:
            return{
                ...state,
                theme: payload
            }
        case UTILS_OPEN_CONTENT:
            return {
                ...state,
                open: payload === state.open ? "" : payload
            }
        case UTILS_DOWNLOAD_SONG_STARTED:
            return {
                ...state,
                download: [...state.download, payload]
            };
        case UTILS_DOWNLOAD_SONG_FINISHED:
            return {
                ...state,
                download: state.download.filter(i => i !== payload)
            }
        default:
            return state;
        }
}

export default Utils