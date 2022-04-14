import {
    UTILS_THEME_CHANGE,
    UTILS_OPEN_CONTENT,
    UTILS_DOWNLOAD_SONG_STARTED,
    UTILS_DOWNLOAD_SONG_FINISHED,
} from '../actions/types';

const defaultTheme = {
    theme: "light",
    backgroundColor: "white",
    wordColor: "black",
    type: "color"
};

let localStorageTheme = localStorage.getItem("theme");

if(!localStorageTheme.substring(0, 1).includes("{")){
    localStorage.setItem("theme", JSON.stringify(defaultTheme));
}
if(localStorageTheme.substring(0, 1).includes("{")){
    localStorageTheme = JSON.parse(localStorageTheme);
}

const initialState = {
    theme: localStorageTheme || defaultTheme,
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