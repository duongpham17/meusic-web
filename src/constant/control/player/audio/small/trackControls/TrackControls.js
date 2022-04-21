import styles from './TrackControls.module.scss';
import React from 'react';

import Play from '../../components/trackControls/Play';
import Next from '../../components/trackControls/Next';
import Cycle from '../../components/trackControls/Cycle';
import PlaybackRate from '../../components/trackControls/PlaybackRate';
import Volume from '../../components/trackControls/Volume';
import Resize from '../../components/trackControls/Resize';

const TrackControls = (props) => {
  return (
    <div className={styles.container}>

      <div className={styles.row}>
        <Play {...props} />
        <Next {...props} />
      </div>

      <div className={styles.row}>
        <Cycle {...props} />
        <PlaybackRate {...props} />
        <Volume {...props} />
        <Resize {...props} />
      </div>

    </div>
  )
}

export default TrackControls