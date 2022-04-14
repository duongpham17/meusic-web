import {
    THEME_CHANGE
} from '../actions/types';

const defaultTheme = {
    theme: "light",
    backgroundColor: "white",
    wordColor: "black",
    type: "color"
};

let localStorageTheme = localStorage.getItem("theme");

if(!localStorageTheme.substring(0, 1).includes("{")){
    localStorage.setItem("theme", JSON.stringify(defaultTheme));
}
if(localStorageTheme.substring(0, 1).includes("{")){
    localStorageTheme = JSON.parse(localStorageTheme);
}

const initialState = {
    theme: localStorageTheme || defaultTheme,
};

export const Theme = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case THEME_CHANGE:
            return{
                theme: payload
            }

        default:
            return state;
        }
}

export default Theme