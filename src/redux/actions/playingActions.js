import { api } from 'redux/api';
import { generateid } from 'utils/generateid';

import {
    PLAYING_PREVIEW_SELECT_PLAYLIST,
    PLAYING_SELECT_PLAYLIST,
    PLAYING_CHANGE_SONG,
    PLAYING_SHOW_TRACKS,
    PLAYING_CLEAR
} from './types';

export const playingPreviewSelectPlaylist = (song) => async dispatch => {
    dispatch({
        type: PLAYING_PREVIEW_SELECT_PLAYLIST,
        payload: {
            song : {
                ...song,
                index: 0,
                previewId: generateid(),
            },
            playlistType: "previewPlaylist",
            playlistId: "previewPlaylistId"
        }
    });
};

export const playingSelectPlaylist = (playlistType, index, playlist, playlistId) => async dispatch => {
    dispatch({
        type: PLAYING_SELECT_PLAYLIST,
        payload: {
            song: {
                ...(playlist[index] || playlist),
                index
            },
            playlist,
            playlistType,
            playlistId,
        }
    });
};

export const playingChangeSong = (index) => async dispatch => {
    dispatch({
        type: PLAYING_CHANGE_SONG,
        payload: index
    })
};

export const playingIncrementSongPlayed = (id) => async dispatch => {
    await api.get(`/songs/played/${id}`);
}

export const playingShowTracks = () => async dispatch => {
    dispatch({
        type: PLAYING_SHOW_TRACKS,
    });
};

export const playingClear = () => async dispatch => {
    dispatch({
        type: PLAYING_CLEAR
    })
}