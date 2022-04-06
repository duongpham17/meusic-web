import styles from './Song.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';


const Song = (props) => {

    const {trackProgress, trackPlaying} = props;
    
    return (
        <div className={styles.container}>
            <img src={trackPlaying.image} alt="playing" />
            <p>{trackPlaying.title}</p> 
            <p>{MinSec(trackProgress)} : {MinSec(trackPlaying.duration)}</p>
        </div>
    )
}

export default Song