import styles from './TrackInformation.module.scss';
import React from 'react';

import Heart from './heart';
import Play from './play';

export const AudioInformation = (props) => {

    const {trackPlaying, onResize, auth} = props;

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div className={styles.container} onClick={() => onResize("large")}>

            <div className={styles.info}>
                <img src={trackPlaying.image} alt="small" />
                <p>{trackPlaying.title}</p> 
            </div>

            <div className={styles.controls} onClick={stopPropagation}>

                {auth.isLoggedIn && <Heart {...props} />}

                <Play {...props} />

            </div>
        </div>
    )
}

export default AudioInformation;
