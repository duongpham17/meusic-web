import styles from './MusicPlaying.module.scss';
import React from 'react';

const MusicAnimation = () => {
    return ( 
        <div className={styles.container}>
            <span className={styles.bar1} />
            <span className={styles.bar2} />
            <span className={styles.bar3} />
            <span className={styles.bar4} />
            <span className={styles.bar5} />
        </div>
    );
};

export default MusicAnimation;
