import {api} from '../api';
import { setAlert } from './alertActions';

import {
    UPLOAD_SONG_ERROR,
    UPLOAD_SONG_UPLOADING,
    UPLOAD_SONG_COMPLETED
} from './types';


export const uploadClearError = () => async dispatch => {
    dispatch({
        type: UPLOAD_SONG_ERROR,
        payload: ""
    });
};

export const uploadSong = (data) => async dispatch => {
    const {url} = data;

    try{    
        dispatch({ 
            type: UPLOAD_SONG_UPLOADING, 
            payload: url 
        });

        await api.post('/songs/upload', data);

        dispatch({ 
            type: UPLOAD_SONG_COMPLETED, 
            payload: url 
        });

        dispatch(setAlert(`Song uploaded`));

    } catch(error) {
        dispatch({
            type: UPLOAD_SONG_COMPLETED,
            payload: url
        });

        if(error.response?.data === undefined) {
            dispatch({ 
                type: UPLOAD_SONG_ERROR, 
                payload: ""
            });
        };
    
        if(error.response?.data.message){
            dispatch({
                type: UPLOAD_SONG_ERROR,
                payload: error.response.data.message
            });
        };
    };
};