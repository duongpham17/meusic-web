import styles from './Control.module.scss';
import React from 'react'

import Navigation from './navigation';
import Player from './player';

const Control = () => {
  return (
    <div className={styles.container}>
        <Player/>
        <Navigation/>
    </div>
  )
}

export default Control