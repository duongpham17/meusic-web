import styles from './TrackProgress.module.scss';
import React from 'react';

export const TrackProgress = (props) => {

    const {trackProgress, trackPlaying} = props;

    return (
      <div className={styles.container}>
          <progress max={trackPlaying.duration} value={trackProgress}  />
      </div>
    )
};

export default TrackProgress;
