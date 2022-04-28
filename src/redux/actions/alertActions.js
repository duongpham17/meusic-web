import {
    ALERT_SET,
    ALERT_REMOVE
} from './types';
import {generateid} from 'utils/generateid';

export const setAlert = (message, timeout = 2000) => async dispatch => {
    const id = generateid();

    dispatch({
        type: ALERT_SET,
        payload: {message, id}
    })
    setTimeout(() => 
        dispatch({
            type: ALERT_REMOVE,
            payload: id
        })
    , timeout);
};

export const removeAlert = (id) => async dispatch => {
    dispatch({
        type: ALERT_REMOVE,
        payload: id
    })
}