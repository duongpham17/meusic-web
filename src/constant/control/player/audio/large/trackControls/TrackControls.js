import styles from './TrackControls.module.scss';
import React from 'react';

import Cycle from './Cycle';
import PlaybackRate from './PlaybackRate';
import Volume from './Volume';

export const TrackControls = (props) => {
  return (
    <div className={styles.container}>
        <Cycle {...props} />
        <PlaybackRate {...props} />
        <Volume {...props} />
    </div>
  )
}

export default TrackControls