import {
    ADMIN_SONG_DELETE,
    ADMIN_SONG_UPDATE,
    
    PREVIEW_PLAYLIST,
    PREVIEW_TOTAL_SONGS
} from '../actions/types';

const initialState = {
    total: "",
    playlist: "",
}

export const Preview = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case ADMIN_SONG_DELETE:
            return{
                ...state,
                playlist: state.playlist.filter(el => el._id !== payload)
            };
        case ADMIN_SONG_UPDATE: 
            state.playlist[payload.index] = payload;
            return{
                ...state,
            }

        case PREVIEW_PLAYLIST:
            return{
                ...state,
                playlist: payload,
            }

        case PREVIEW_TOTAL_SONGS: 
            return{
                ...state,
                total: payload
            }

        default:
            return state;
        }
}

export default Preview