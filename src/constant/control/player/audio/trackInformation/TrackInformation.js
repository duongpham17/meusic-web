import styles from './TrackInformation.module.scss';
import React from 'react';

export const AudioInformation = (props) => {

    const {trackPlaying, trackIndex, tracks, playingShowTracks} = props;

    return (
        <div className={styles.container}>
            <p> {trackPlaying.title} </p>
            <button className={styles.trackBtn} onClick={playingShowTracks}> {(trackIndex+1)} / {tracks.length} </button>
        </div>
    )
}

export default AudioInformation;
