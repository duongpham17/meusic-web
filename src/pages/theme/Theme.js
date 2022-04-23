/* This page is linked to theme folder */

import styles from './Theme.module.scss';
import React from 'react';
import {connect} from 'react-redux';
import {utilsThemeChange} from 'redux/actions/utilsActions';
import {backgroundTheme} from 'theme/backgroundTheme';

export const Theme = ({utilsThemeChange}) => {

    return (
        <div className={styles.container}>
            <h1>Theme</h1>

            <div className={styles.backgroundTheme}>
                {backgroundTheme.map((el) =>
                    <div key={el.theme}>
                        <button onClick={() => utilsThemeChange(el)} style={{background: `linear-gradient(140deg, ${el.backgroundColor} 75%, ${el.wordColor} 25%)`}} />
                        <p>{el.theme.toUpperCase()}</p>
                    </div>
                )}
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    utilsThemeChange
}

export default connect(null, mapDispatchToProps)(Theme)
