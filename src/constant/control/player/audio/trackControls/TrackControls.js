import styles from './TrackControls.module.scss';
import React from 'react';

import Play from './controls/Play';
import Next from './controls/Next';
import Resize from './controls/Resize';
import Volume from './controls/Volume';
import PlaybackRate from './controls/PlaybackRate';
import Cycle from './controls/Cycle';

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