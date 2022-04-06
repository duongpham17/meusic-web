import styles from './Layout2.module.scss';
import React from 'react';
import {MinSec} from 'utils/time';
import MusicPlaying from 'components/musicPlaying';

/**
 * @param { Object } song - song information
 * @param { string } song.image - song image url
 * @param { string } song.title - song title
 * @param { string } song.artist - song artist
 * @param { number } song.duration - song duration
 * @param { number } song.played - amount of times the song has been played by user
 * @param { number } index - index of song
 * @param { boolean } isPlaying - is song selected
*/

export const Layout2 = ({ song, index, isPlaying }) => {

    return (
        <div className={styles.container}>

            <div className={`${isPlaying && styles.isPlaying}`}>
                <div>{isPlaying && <MusicPlaying/>}</div>
                <img src={song.image} alt="i"/>
            </div>

            <div>
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{MinSec(song.duration)}</p>
            </div>  

            <div>
                <p>{index+1}</p>
            </div>

        </div>
    )
}

export default Layout2;