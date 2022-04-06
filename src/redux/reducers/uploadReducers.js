import {
    UPLOAD_SONG_OPEN,
    UPLOAD_SONG_ERROR,
    UPLOAD_SONG_UPLOADING,
    UPLOAD_SONG_COMPLETED
} from '../actions/types';

const initialState = {
    open: false,
    status: "",
    uploading: [],
}

export const Upload = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){

        case UPLOAD_SONG_OPEN:
            return{
                ...state,
                open: state.open ? false : true,
            };
        case UPLOAD_SONG_ERROR:
            return{
                ...state,
                status: payload
            }
        case UPLOAD_SONG_UPLOADING:
            return{
                ...state,
                uploading: [...state.uploading, payload],
                status: "",
            }

        case UPLOAD_SONG_COMPLETED: 
            return{
                ...state,
                uploading: state.uploading.filter(el => el !== payload)
            }
            
        default:
            return state;
    }
}

export default Upload