import {
    THEME_CHANGE
} from './types';

export const themeChange = (theme) => async dispatch => {

    localStorage.setItem('theme', JSON.stringify(theme));

    dispatch({
        type: THEME_CHANGE,
        payload: theme
    })
}