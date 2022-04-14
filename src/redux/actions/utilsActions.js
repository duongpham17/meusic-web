import {
    UTILS_THEME_CHANGE,
    UTILS_OPEN_CONTENT,
    UTILS_DOWNLOAD_SONG_STARTED,
    UTILS_DOWNLOAD_SONG_FINISHED,
} from './types';

export const utilsThemeChange = (theme) => async dispatch => {

    localStorage.setItem('theme', JSON.stringify(theme));

    dispatch({
        type: UTILS_THEME_CHANGE,
        payload: theme
    })
};

export const utilsOpenContent = (id) => async dispatch => {
    dispatch({
        type: UTILS_OPEN_CONTENT,
        payload: id
    })
};

export const utilsDownloadOptions = (type, name) => async dispatch => {
    if(type === "start") {
        dispatch({
            type: UTILS_DOWNLOAD_SONG_STARTED,
            payload: name
        });
    }

    if(type === "end"){
        dispatch({
            type: UTILS_DOWNLOAD_SONG_FINISHED,
            payload: name
        });
    }
};