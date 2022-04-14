import {
    THEME_CHANGE
} from './types';

/**
 * @param { Object } theme - Object containing information about the theme
 * @param { String } theme.theme - theme name
 * @param { String } theme.backgroundColor - background color of page
 * @param { String } theme.wordColor - word / text color 
 * @param { String } theme.type - type of theme - enum "color" | "wallpaper"
*/

export const themeChange = (theme) => async dispatch => {

    localStorage.setItem('theme', JSON.stringify(theme));

    dispatch({
        type: THEME_CHANGE,
        payload: theme
    })
}