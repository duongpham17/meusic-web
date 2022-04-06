import { api } from 'redux/api';
import { setAlert } from './alertActions';

import {
    ADMIN_SONG_DELETE,
} from './types';

export const adminDeleteSong = (id) => async dispatch => {
    try{
        await api.patch(`/admin/songs/${id}`);
        dispatch({
            type: ADMIN_SONG_DELETE,
            payload: id
        });
        dispatch(setAlert("Song deleted."));
    } catch(err) {
        console.log(err.response);
    }
};

export const adminUpdateSongsKeys = (data) => async dispatch => {
    try{
        await api.patch('/admin/songs/keys', data);
        dispatch(setAlert("Update complete."));
    } catch(err) {
        console.log(err.response);
    }
};

export const adminDeleteAllFromStorage = () => async dispatch => {
    try{
        await api.delete('/admin/cid');
        dispatch(setAlert("nft.storage cleaned."));
    } catch(err) {
        console.log(err.response);
    }
};
