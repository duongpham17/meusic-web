import './Theme.scss';
import React, {useLayoutEffect} from 'react';
import { connect } from 'react-redux';
import {backgroundTheme} from 'theme/backgroundTheme';

import clouds from './images/clouds.jpg';
import moon from './images/moon.jpeg';
import winter from './images/winter.jpeg';

const Theme = ({theme, children}) =>  {

    const themeStyle = !JSON.parse(localStorage.getItem("theme")) ? backgroundTheme[0] : JSON.parse(localStorage.getItem("theme"));

    useLayoutEffect(() => {

        if(themeStyle.type === "color") {
            document.body.style.background = themeStyle.backgroundColor;
        }

        if(themeStyle.type === "wallpaper") {

            const wallpaper = (theme, image) => {
                if(themeStyle.theme === theme) return document.body.style.backgroundImage = `url('${image}')`;
            };

            wallpaper("clouds", clouds);
            wallpaper("moon", moon);
            wallpaper("winter", winter);

            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
        };

    }, [theme, themeStyle]);

    return (
        <div className={`theme-${themeStyle.theme}`}>
            {children}
        </div>
    ) 
}

const mapStateToProps = state => ({
    theme: state.themeReducers
});

export default connect(mapStateToProps)(Theme);
