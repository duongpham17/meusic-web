import styles from './Settings.module.scss';
import React from 'react';

import CreatePlaylist from './createPlaylist';
import Reorder from './reorder';

const Settings = (props) => {
  return (
    <div className={styles.container}>
        <CreatePlaylist {...props} />
        <Reorder {...props} />
    </div>
  )
}

export default Settings