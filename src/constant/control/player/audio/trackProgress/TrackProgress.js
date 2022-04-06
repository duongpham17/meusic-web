import styles from './TrackProgress.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';

export const TrackProgress = (props) => {

  const {seek, trackProgress, trackPlaying} = props;
  
  return (
    <div className={styles.container}>
        <p>{MinSec(trackProgress)}</p>
        <input className={styles.range} type="range" min="0" step="0.01" max={trackPlaying.duration} value={trackProgress} onChange={seek} />
        <p>{MinSec(trackPlaying.duration)}</p>
    </div>
  )
};

export default TrackProgress;
