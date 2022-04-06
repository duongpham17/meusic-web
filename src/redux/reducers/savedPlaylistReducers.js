import {
    SAVED_PLAYLIST_GET,
    SAVED_PLAYLIST_ADD_TO,
    SAVED_PLAYLIST_REMOVE_FROM,
} from '../actions/types';

const initialState = {
    playlist: "",
}

export const Saved = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case SAVED_PLAYLIST_GET:
            return{
                ...state,
                playlist: payload
            };
        case SAVED_PLAYLIST_ADD_TO:
            return{
                ...state,
                playlist: [payload, ...state.playlist]
            }
        case SAVED_PLAYLIST_REMOVE_FROM:
            return{
                ...state,
                playlist: state.playlist.filter(el => el._id !== payload)
            }
        default:
            return state;
        }
}

export default Saved