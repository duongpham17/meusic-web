import styles from './Layout3.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';
import MusicPlaying from 'components/musicPlaying';

/**
 * @param { Object } song - song information
 * @param { string } song.image - song image url
 * @param { string } song.title - song title
 * @param { number } song.duration - song duration
 * @param { number } song.played - amount of times the song has been played by user
 * @param { number } index - index of song
 * @param { boolean } isPlaying - is song selected
*/

export const Layout3 = ({ song, isPlaying, index }) => {

    return (
        <div className={styles.container}>

            <div className={`${isPlaying && styles.isPlaying}`}>
                <div>{isPlaying && <MusicPlaying/>}</div>
                <img src={song.image} alt="i"/>
                <span>{index}</span>
            </div>

            <div>
                <p>{song.title}</p>
                <p>{MinSec(song.duration)}</p>
            </div> 


        </div>
    )
}

export default Layout3;