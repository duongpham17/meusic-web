import {
    SAVED_PLAYLIST,
    SAVED_PLAYLIST_SAVE,
    SAVED_PLAYLIST_REMOVE,
} from '../actions/types';

const initialState = {
    playlist: [],
}

export const Saved = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case SAVED_PLAYLIST:
            return{
                ...state,
                playlist: payload
            };
        case SAVED_PLAYLIST_SAVE:
            return{
                ...state,
                playlist: [payload, ...state.playlist]
            }
        case SAVED_PLAYLIST_REMOVE:
            return{
                ...state,
                playlist: state.playlist.filter(el => el._id !== payload)
            }
        default:
            return state;
        }
}

export default Saved