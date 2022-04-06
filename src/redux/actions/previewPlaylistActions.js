import {api} from '../api';

import {
    PREVIEW_GET_SONGS,
    PREVIEW_GET_TOTAL_SONGS
} from './types';


export const previewGetSongs = () => async dispatch => {
    try{
        const res = await api.get(`/songs${window.location.search}`);
        dispatch({
            type: PREVIEW_GET_SONGS,
            payload: res.data.songs,
        })
    } catch(error) {
        console.log(error.response)
    }
}

export const previewGetTotalSongs = () => async dispatch => {
    try{
        const res = await api.get(`/songs/total`);
        dispatch({
            type: PREVIEW_GET_TOTAL_SONGS,
            payload: res.data.total
        });
    } catch(error){
        console.log(error.response)
    }
}