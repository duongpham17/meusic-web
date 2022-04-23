import {api} from '../api';
import {setAlert} from './alertActions';

import {
    SAVED_PLAYLIST_GET,
    SAVED_PLAYLIST_ADD_TO,
    SAVED_PLAYLIST_REMOVE_FROM,
} from './types';

export const savedPlaylistGetSongs = (query) => async dispatch => {
    try{
        const res = await api.get(`/saved/playlist?sort=${query || localStorage.getItem("savedPlaylist-sort")}`);
        dispatch({
            type: SAVED_PLAYLIST_GET,
            payload: res.data.saved
        });
    } catch(error) {
        console.log(error.response);
    };
}

export const savedPlaylistAddTo = (id) => async dispatch => {
    try{
        const res = await api.post(`/saved/playlist/${id}`);
        dispatch({
            type: SAVED_PLAYLIST_ADD_TO,
            payload: res.data.saved
        });
        dispatch(setAlert("Song saved"));
    } catch(error) {
        console.log(error.response)
    };
};

export const savedPlaylistRemoveFrom = (id) => async dispatch => {
    try{
        await api.delete(`/saved/playlist/${id}`);
        dispatch({
            type: SAVED_PLAYLIST_REMOVE_FROM,
            payload: id
        });
        dispatch(setAlert("Song removed"));
    } catch(error) {
        console.log(error.response)
    };
};