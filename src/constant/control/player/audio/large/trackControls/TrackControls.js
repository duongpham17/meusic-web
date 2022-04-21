import styles from './TrackControls.module.scss';
import React from 'react';

import Cycle from '../../components/trackControls/Cycle';
import PlaybackRate from '../../components/trackControls/PlaybackRate';
import Volume from '../../components/trackControls/Volume';

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