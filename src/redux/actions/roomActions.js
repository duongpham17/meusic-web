import { api } from '../api';
import { setAlert } from './alertActions';

import {
    ROOM,
    ROOM_CLEAR,
    ROOM_CREATED_BY_ME,
    ROOM_SEARCH_ROOM,
    ROOM_SEARCH_SONG,
    ROOM_CREATE,
    ROOM_DELETE,
    ROOM_PRIVATE_UPDATE,
    ROOM_ERROR,
    ROOM_CLEAR_ERROR,
} from './types';

export const roomClearError = () => async dispatch => {
    dispatch({
        type: ROOM_CLEAR_ERROR
    })
};

export const roomClear = () => async dispatch => {
    dispatch({
        type: ROOM_CLEAR
    });
}

export const roomGet = (name) => async dispatch => {
    try{
        const res = await api.get(`/rooms/${name}`);
        if(res.data.room === null){
            dispatch({
                type: ROOM,
                payload: "nothing"
            });
        }
        if(res.data.room){
            dispatch({
                type: ROOM,
                payload: res.data.room
            });
        }
        return res.data.room;
    } catch(error) {
        console.log(error.response);
    };
};

export const roomGetCreateByMe = () => async dispatch => {
    try{
        const res = await api.get(`/rooms`);
        dispatch({
            type: ROOM_CREATED_BY_ME,
            payload: res.data.room
        });
    } catch(error) {
        console.log(error.response);
    };
};

export const roomSearchRoom = (name) => async dispatch => {
    try{
        const res = await api.get(`/rooms/search/${name}`);
        dispatch({
            type: ROOM_SEARCH_ROOM,
            payload: res.data.room
        });
    } catch(error) {
        console.log(error.response);
    };
};

export const roomSearchSong = (title) => async dispatch => {
    try{
        const res = await api.get(`/songs?title=${title}`);
        dispatch({
            type: ROOM_SEARCH_SONG,
            payload: res.data.songs
        });
    } catch(error) {
        console.log(error.response);
    };
};


export const roomCreate = (data) => async dispatch => {
    dispatch({
        type: ROOM_ERROR,
        payload: ""
    });
    try{
        const res = await api.post(`/rooms`, data);
        dispatch({
            type: ROOM_CREATE,
            payload: res.data.room
        })
        return res.data.room;
    } catch(error) {
        dispatch({
            type: ROOM_ERROR,
            payload: {
                exist: "Room already taken"
            }
        })
    };
};

export const roomDelete = (id) => async dispatch => {
    try{
        await api.delete(`/rooms/${id}`);
        dispatch({
            type: ROOM_DELETE,
            payload: id
        });

        dispatch(setAlert(`Room deleted`))
    } catch(error){
        console.log(error.response);
    }
};

export const roomPrivateUpdate = (data) => async dispatch => {
    try{
        const res = await api.patch(`/rooms/private`, data);

        dispatch({
            type: ROOM_PRIVATE_UPDATE,
            payload: res.data.room
        });

        dispatch(setAlert(`${data.room} room updated`))
    } catch(error){
        console.log(error.response);
    }
};

export const roomCheckPassword = (data) => async dispatch => {
    try{
        const res = await api.post(`/rooms/password`, data);
        dispatch({
            type: ROOM,
            payload: res.data.room
        });
        dispatch(setAlert(`Welcome to ${data.room}`));
        return true;
    } catch(error){
        dispatch({
            type: ROOM_ERROR,
            payload: {
                password: "Password is incorrect"
            }
        });
        return false;
    }
};
