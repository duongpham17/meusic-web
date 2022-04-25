import {
    ROOM,
    ROOM_SEARCH_ROOM,
    ROOM_SEARCH_SONG,
    ROOM_CREATED_BY_ME,
    ROOM_CREATE,
    ROOM_DELETE,
    ROOM_PRIVATE_UPDATE,
    ROOM_ERROR,
    ROOM_CLEAR_ERROR
} from '../actions/types';

const initialState = {
    room: "",
    admin: [],
    searchRoom: "",
    searchSongs: "",
    error: "",
}

export const Room = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case ROOM:
            return{
                ...state,
                room: payload
            }
        case ROOM_CREATE:
                return{
                    ...state,
                    admin: [payload, ...state.admin]
                }
        case ROOM_CREATED_BY_ME:
            return{
                ...state,
                admin: payload,
            }
        case ROOM_SEARCH_SONG:
            return{
                ...state,
                searchSong: payload
            }
        case ROOM_SEARCH_ROOM:
            return{
                ...state,
                searchRoom: payload
            };
        case ROOM_PRIVATE_UPDATE:
            const index = state.admin.findIndex(el => el._id === payload._id);
            return{
                ...state,
                room: state.admin.splice(index, 1, payload)
            };
        case ROOM_DELETE:
            return{
                ...state,
                admin: state.admin.filter(el => el._id !== payload)
            }
        case ROOM_ERROR:
            return{
                ...state,
                error: payload
            }
        case ROOM_CLEAR_ERROR: 
            return{
                ...state,
                error: ""
            }
        default:
            return state;
        }
}

export default Room