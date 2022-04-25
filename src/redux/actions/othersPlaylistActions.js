import { api } from 'redux/api';
import {setAlert} from './alertActions';

import {
    OTHERS_PLAYLIST_SEARCH,
    OTHERS_PLAYLIST,
    OTHERS_PLAYLIST_SAVE,
    OTHERS_PLAYLIST_DELETE
} from './types';

export const othersPlaylistGet = () => async dispatch => {
    try{
        const res = await api.get(`/others/playlist`);
        dispatch({
            type: OTHERS_PLAYLIST,
            payload: res.data.others
        });
    } catch(error) {
        console.log(error.response)
    }
};

export const othersPlaylistSearch = (name) => async dispatch => {
    try{
        const res = await api.get(`/others/playlist/${name}`);
        dispatch({
            type: OTHERS_PLAYLIST_SEARCH,
            payload: res.data.others
        });
    } catch(error) {
        console.log(error.response)
    }
};

export const othersPlaylistClear = () => async dispatch => {
    dispatch({
        type: OTHERS_PLAYLIST_SEARCH,
        payload: []
    })
};

export const othersPlaylistSave = (id) => async dispatch => {
    try{
        const res = await api.post(`/others/playlist/${id}`);
        dispatch({
            type: OTHERS_PLAYLIST_SAVE,
            payload: res.data.others
        });
        dispatch(setAlert("Playlist saved"));
    } catch(error){
        dispatch(setAlert("Playlist already saved"));
    }
}

export const othersPlaylistDelete = (id) => async dispatch => {
    try{
        await api.delete(`/others/playlist/${id}`);
        dispatch({
            type: OTHERS_PLAYLIST_DELETE,
            payload: id
        });
        dispatch(setAlert("Playlist deleted"));
    } catch(error){
        console.log(error.response)
    }
}