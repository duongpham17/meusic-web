import {
    OTHERS_PLAYLIST_SEARCH,
    OTHERS_PLAYLIST_GET,
    OTHERS_PLAYLIST_SAVE,
    OTHERS_PLAYLIST_DELETE
} from '../actions/types';

const initialState = {
    search: "",
    playlist: "",
}

export const Customise = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){

        case OTHERS_PLAYLIST_SEARCH:
            return{
                ...state,
                search: payload
            }
        case OTHERS_PLAYLIST_GET:
            return{
                ...state,
                playlist: payload
            }
        case OTHERS_PLAYLIST_SAVE:
            return{
                ...state,
                playlist: [payload, ...state.playlist]
            }
        case OTHERS_PLAYLIST_DELETE:
            return{
                ...state,
                playlist: state.playlist.filter(el => el._id !== payload)
            }
            
        default:
            return state;
    }
}

export default Customise