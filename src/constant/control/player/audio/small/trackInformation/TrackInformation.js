import styles from './TrackInformation.module.scss';
import React from 'react';

export const AudioInformation = (props) => {

    const {trackPlaying, trackIndex, tracks, utilsOpenContent, onResize} = props;

    const onOpenContent = () => utilsOpenContent("tracks");

    return (
        <div className={styles.container}>
            <button className={styles.titleBtn} onClick={() => onResize("large")}> <p>{trackPlaying.title}</p> </button>
            <button className={styles.trackBtn} onClick={onOpenContent}> {(trackIndex+1)} / {tracks.length} </button>
        </div>
    )
}

export default AudioInformation;
