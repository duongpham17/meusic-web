import styles from './TrackInformation.module.scss';
import React from 'react';

export const AudioInformation = (props) => {

    const {trackPlaying} = props;

    return (
        <div className={styles.container}>
            <img src={trackPlaying.image} alt="large"/>
            <p><span>{trackPlaying.title}</span></p>
        </div>
    )
}

export default AudioInformation;
