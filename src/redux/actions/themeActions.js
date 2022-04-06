import {
    THEME_CHANGE
} from './types';

export const themeChange = (theme) => async dispatch => {

    const currentTheme = localStorage.getItem("theme");

    if(currentTheme === theme) return;

    localStorage.setItem('theme', theme);

    dispatch({
        type: THEME_CHANGE,
        payload: theme
    })
}