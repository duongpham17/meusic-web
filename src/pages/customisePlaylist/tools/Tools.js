import styles from './Tools.module.scss';
import React from 'react';

import CreatePlaylist from './createPlaylist';
import Reorder from './reorder';

const Tools = (props) => {
  return (
    <div className={styles.container}>
        <CreatePlaylist {...props} />
        <Reorder {...props} />
    </div>
  )
}

export default Tools