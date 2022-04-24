import {api} from '../api';
import {setAlert} from './alertActions';

import {
    CUSTOMISE_PLAYLIST_GET,
    CUSTOMISE_PLAYLIST_CREATE,
    CUSTOMISE_PLAYLIST_DELETE,
    CUSTOMISE_PLAYLIST_UPDATE,
    CUSTOMISE_PLAYLIST_REORDER
} from './types';

export const customisePlaylistGet = () => async dispatch => {
    try{
        const res = await api.get('/customise/playlist');
        dispatch({
            type: CUSTOMISE_PLAYLIST_GET,
            payload: res.data.customise
        });
    } catch(error) {
        console.log(error.response);
    }
};

export const customisePlaylistCreate = (data) => async dispatch => {
    try{
       const res = await api.post(`/customise/playlist`, data);
       dispatch({
           type: CUSTOMISE_PLAYLIST_CREATE,
           payload: res.data.customise
       });
    } catch(error) {
        console.log(error.response);
    }
};

export const customisePlaylistUpdate = (data) => async dispatch => {
    try{
       const res = await api.patch(`/customise/playlist`, data);
       dispatch({
           type: CUSTOMISE_PLAYLIST_UPDATE,
           payload: res.data.customise,
       });
       dispatch(setAlert("Playlist updated"));
    } catch(error) {
        console.log(error.response);
    }
};

export const customisePlaylistDuplicate = (data) => async dispatch => {
    try{
        const res = await api.post(`/customise/playlist/duplicate`, data);

        res.data.customise.new = true;

        dispatch({
            type: CUSTOMISE_PLAYLIST_CREATE,
            payload: res.data.customise
        });
        dispatch(setAlert("Playlist duplicated"));
    } catch(error){
        console.log(error.response);
    }
}

export const customisePlaylistDelete = (id) => async dispatch => {
    try{
        await api.delete(`/customise/playlist/${id}`);
        dispatch({
            type: CUSTOMISE_PLAYLIST_DELETE,
            payload: id
        });
        dispatch(setAlert("Playlist deleted"));
    } catch(error){
        console.log(error.response);
    }
};

export const customisePlaylistSaveOthers = (data) => async dispatch => {
    try{
        const res = await api.post(`/customise/playlist/save`, data);

        res.data.customise.new = true;

        dispatch({
            type: CUSTOMISE_PLAYLIST_CREATE,
            payload: res.data.customise
        });
        dispatch(setAlert("Saved to customise playlist"));
    } catch(error){
        console.log(error.response);
    }
};

export const customisePlaylistReorder = (data) => async dispatch => {
    dispatch({
        type: CUSTOMISE_PLAYLIST_REORDER,
        payload: data
    });
    try{
        await api.patch('/customise/playlist/reorder', data);
    } catch(error){
        console.log(error.response);
    }
};

export const customisePlaylistRandomise = () => async dispatch => {
    try{
        const res = await api.get(`/customise/playlist/randomise`);
        res.data.customise.new = true;
        dispatch({
            type: CUSTOMISE_PLAYLIST_CREATE,
            payload: res.data.customise
        });
        dispatch(setAlert("Random playlist created"));
    } catch(error){
        console.log(error.response);
    }
};