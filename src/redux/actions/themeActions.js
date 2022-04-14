import {
    THEME_CHANGE
} from './types';

/**
 * @param { String } theme - theme name
 * @param { String } type - type enum "color" | "wallpaper"
*/

export const themeChange = (theme) => async dispatch => {

    localStorage.setItem('theme', JSON.stringify(theme));

    dispatch({
        type: THEME_CHANGE,
        payload: theme
    })
}