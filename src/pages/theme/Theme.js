/* This page is linked to theme folder */

import styles from './Theme.module.scss';
import React from 'react';
import {connect} from 'react-redux';
import {themeChange} from 'redux/actions/themeActions';
import {backgroundTheme} from 'theme/backgroundTheme';
import {generateid} from 'utils/generateid';

export const Theme = ({themeChange}) => {

    const backgroundTheme_keys = Object.keys(backgroundTheme);
    
    const backgroundTheme_values = Object.values(backgroundTheme);

    return (
        <div className={styles.container}>
            <h1>Theme</h1>

            <div className={styles.backgroundTheme}>
                {backgroundTheme_keys.map((el, index) =>
                    <div key={generateid()}>
                        <button onClick={() => themeChange(el)} style={{backgroundColor: backgroundTheme_values[index]}} />
                        <p>{el.toUpperCase()}</p>
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
