import {
    DOWNLOAD_SONG_STARTED,
    DOWNLOAD_SONG_FINISHED,
} from './types';

export const downloadOptions = (type, title) => async dispatch => {
    if(type === "start") {
        dispatch({
            type: DOWNLOAD_SONG_STARTED,
            payload: title
        });
    }

    if(type === "end"){
        dispatch({
            type: DOWNLOAD_SONG_FINISHED,
            payload: title
        });
    }
};
