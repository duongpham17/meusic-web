import {api} from '../api';
import {setAlert} from './alertActions';

import {
    SAVED_PLAYLIST,
    SAVED_PLAYLIST_SAVE,
    SAVED_PLAYLIST_REMOVE,
} from './types';

export const savedPlaylistGetSongs = (query) => async dispatch => {
    try{
        const res = await api.get(`/saved/playlist?sort=${query || localStorage.getItem("savedPlaylist-sort")}`);
        dispatch({
            type: SAVED_PLAYLIST,
            payload: res.data.saved
        });
    } catch(error) {
        console.log(error.response);
    };
}

export const savedPlaylistSave = (id) => async dispatch => {
    try{
        const res = await api.post(`/saved/playlist/${id}`);
        dispatch({
            type: SAVED_PLAYLIST_SAVE,
            payload: res.data.saved
        });
        dispatch(setAlert("Song saved"));
    } catch(error) {
        console.log(error.response)
    };
};

export const savedPlaylistRemove = (id) => async dispatch => {
    try{
        await api.delete(`/saved/playlist/${id}`);
        dispatch({
            type: SAVED_PLAYLIST_REMOVE,
            payload: id
        });
        dispatch(setAlert("Song removed"));
    } catch(error) {
        console.log(error.response)
    };
};