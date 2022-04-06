import {
    ADMIN_SONG_DELETE,
    
    PREVIEW_GET_TOTAL_SONGS,
    PREVIEW_GET_SONGS,
} from '../actions/types';

const initialState = {
    total: "",
    songs: "",
}

export const Preview = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case ADMIN_SONG_DELETE:
            return{
                ...state,
                songs: state.songs.filter(el => el._id !== payload)
            };

        case PREVIEW_GET_SONGS:
            return{
                ...state,
                songs: payload,
            }

        case PREVIEW_GET_TOTAL_SONGS: 
            return{
                ...state,
                total: payload
            }

        default:
            return state;
        }
}

export default Preview