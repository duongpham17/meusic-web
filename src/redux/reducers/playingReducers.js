import {
    PLAYING_PREVIEW_SELECT_PLAYLIST,
    PLAYING_SELECT_PLAYLIST,
    PLAYING_CHANGE_SONG,
    PLAYING_CLEAR
} from '../actions/types';

const initialState = {
    song: "",
    playlist: [],
    playlistType: "", // enum [previewPlaylist, savedPlaylist, customisePlaylist, friendsPlaylist];
    playlistId: "",
}

export const Playing = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case PLAYING_PREVIEW_SELECT_PLAYLIST:
            const anotherPlaylist = state.playlistType !== "previewPlaylist";

            let playlist;

            if(anotherPlaylist) playlist = [payload.song];
            if(!anotherPlaylist) playlist = [payload.song, ...state.playlist];

            return{
                ...state,
                ...payload,
                song: payload.song,
                playlist: playlist,
            }

        case PLAYING_SELECT_PLAYLIST:
            return{
                ...state,
                ...payload,
                playlist: payload.playlist,
            }

        case PLAYING_CHANGE_SONG: 
            return{
                ...state,
                song: payload || payload === 0 ? {...state.playlist[payload], index: payload} : state.song
            }

        case PLAYING_CLEAR:
            return{
                ...initialState
            }

        default:
            return state;
        }
}

export default Playing


/*

            if(state.playlistType !== "previewPlaylist"){
                return{
                    song: payload.song,
                    playlist: [payload.song],
                    playlistType: payload.playlistType,
                    playlistId: payload.playlistType
                }
            }

            const newIndexPlaylist = state.playlist.map((el) => {
                el.index = el.index + 1;
                return el;
            });

            return {
                ...state,
                song: payload.song,
                playlist: [payload.song, ...newIndexPlaylist]
            }
            */