import './Theme.scss';
import React, {useLayoutEffect} from 'react';
import { connect } from 'react-redux';
import {backgroundTheme} from 'theme/backgroundTheme';

const Theme = ({theme, children}) =>  {

    const body = (color) => document.body.style = `background: ${color}`;

    const themeStyle = !localStorage.getItem("theme") ? "light" : localStorage.getItem("theme");

    const backgroundTheme_keys = Object.keys(backgroundTheme);

    const backgroundTheme_values = Object.values(backgroundTheme);

    useLayoutEffect(() => {

        backgroundTheme_keys.forEach((theme, index) => {
            if(themeStyle === theme) body(backgroundTheme_values[index])
        });

    }, [theme, themeStyle, backgroundTheme_keys, backgroundTheme_values]);

    return (
        <div className={`theme-${themeStyle}`}>
            {children}
        </div>
    ) 
}

const mapStateToProps = state => ({
    theme: state.themeReducers
});

export default connect(mapStateToProps)(Theme);
