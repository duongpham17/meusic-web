import {
    CUSTOMISE_PLAYLIST_GET,
    CUSTOMISE_PLAYLIST_CREATE,
    CUSTOMISE_PLAYLIST_UPDATE,
    CUSTOMISE_PLAYLIST_DELETE,
    CUSTOMISE_PLAYLIST_REORDER
} from '../actions/types';

const initialState = {
    playlist: ""
}

export const Customise = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){

        case CUSTOMISE_PLAYLIST_REORDER:
        case CUSTOMISE_PLAYLIST_GET:
            return{
                ...state,
                playlist: payload
            }
        case CUSTOMISE_PLAYLIST_CREATE:
            return{
                ...state,
                playlist: [payload, ...state.playlist]
            }
        case CUSTOMISE_PLAYLIST_UPDATE:
            const index = state.playlist.findIndex(el => el._id === payload._id);
            state.playlist[index] = payload;
            return{
                ...state,
                playlist: state.playlist
            }
        case CUSTOMISE_PLAYLIST_DELETE:
            return{
                ...state,
                playlist: state.playlist.filter(el => el._id !== payload)
            }

        default:
            return state;
    }
}

export default Customise