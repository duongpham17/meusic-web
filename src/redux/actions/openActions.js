import {
    OPEN_CONTENT
} from './types';

export const openContent = (id) => async dispatch => {
    dispatch({
        type: OPEN_CONTENT,
        payload: id
    })
};
