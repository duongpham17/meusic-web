import styles from './Layout.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';
import MusicPlaying from 'components/musicPlaying';

export const Layout2 = ({ song, isPlaying, index, played, artist }) => {

    return (
        <div className={styles.container}>

            <div className={`${styles.image} ${isPlaying && styles.isPlaying} ${styles.layout2Image}`}>
                {isPlaying && <MusicPlaying/>}
                <img src={song.image} alt="i"/>
                <p className={styles.index}>{index+1}</p>
            </div>

            <div className={`${styles.information} ${styles.layout2information}`}>
                <p className={styles.title}>{song.title}</p>
                <p className={styles.text}>{artist && `${song.artist}`}</p>
                <p className={styles.text}>{MinSec(song.duration)}</p>
                <p className={styles.text}>{played && `Played ${song.played}`}</p>
            </div>  

        </div>
    )
}

export default Layout2;