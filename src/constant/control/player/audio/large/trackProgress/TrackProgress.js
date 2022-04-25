import styles from './TrackProgress.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';

export const TrackProgress = (props) => {

    const {onSeek, trackProgress, trackPlaying} = props;

    return (
      <div className={styles.container}>
          <p>
            <span>{MinSec(trackProgress)}</span>
            <span>{MinSec(trackPlaying.duration)}</span>
          </p>
          <input className={styles.range} type="range" min="0" step="0.01" max={trackPlaying.duration} value={trackProgress} onChange={onSeek} />
      </div>
    )
};

export default TrackProgress;
