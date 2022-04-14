/* This page is linked to theme folder */

import styles from './Theme.module.scss';
import React from 'react';
import {connect} from 'react-redux';
import {themeChange} from 'redux/actions/themeActions';
import {backgroundTheme} from 'theme/backgroundTheme';

export const Theme = ({themeChange}) => {

    return (
        <div className={styles.container}>
            <h1>Theme</h1>

            <div className={styles.backgroundTheme}>
                {backgroundTheme.map((el) =>
                    <div key={el.theme}>
                        <button onClick={() => themeChange(el)} style={{background: `linear-gradient(120deg, ${el.backgroundColor} 60%, ${el.wordColor} 40%)`}} />
                        <p>{el.theme.toUpperCase()}</p>
                    </div>
                )}
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    themeChange
}

export default connect(null, mapDispatchToProps)(Theme)
