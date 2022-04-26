import {api} from '../api';

import {
    PREVIEW_PLAYLIST,
    PREVIEW_TOTAL_SONGS
} from './types';


export const previewGetSongs = () => async dispatch => {
    try{
        const res = await api.get(`/songs${window.location.hash.replace("#/", "")}`);
        dispatch({
            type: PREVIEW_PLAYLIST,
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
            type: PREVIEW_TOTAL_SONGS,
            payload: res.data.total
        });
    } catch(error){
        console.log(error.response)
    }
}