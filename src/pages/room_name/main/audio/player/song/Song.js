import styles from './Song.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';


const Song = (props) => {

    const {trackProgress, trackPlaying} = props;
    
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={trackPlaying.image} alt="playing" />
            </div>
            <div>
                <p>{trackPlaying.title}</p> 
                <p className={styles.duration}>{MinSec(trackProgress)} : {MinSec(trackPlaying.duration)}</p>
            </div>
        </div>
    )
}

export default Song