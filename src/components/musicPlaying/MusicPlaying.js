import styles from './MusicPlaying.module.scss';
import React from 'react';

const MusicAnimation = () => {
    return ( 
        <div className={styles.container}>
            <p className={styles.bar1} />
            <p className={styles.bar2} />
            <p className={styles.bar3} />
            <p className={styles.bar4} />
            <p className={styles.bar5} />
        </div>
    );
};

export default MusicAnimation;
