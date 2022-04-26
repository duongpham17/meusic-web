import {
    ALERT_SET,
    ALERT_REMOVE
} from './types';
import {generateid} from 'utils/generateid';

export const setAlert = (message, side="right", timeout = 2000) => async dispatch => {
    const id = generateid();

    dispatch({
        type: ALERT_SET,
        payload: {message, id, side}
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