import styles from './Overview.module.scss';
import React from 'react';

import {BsFillPlayFill} from 'react-icons/bs';
import { HourMin } from 'utils/time';
import MusicPlaying from 'components/musicPlaying';

const Overview = (props) => {
    const {element, playing, playingSelectPlaylist} = props;

    const totalDuration = (array) => HourMin(array.reduce((acc, current) =>  acc + current.duration, 0));

    const onPlay = (event) => {
        event.stopPropagation();
        const {song, _id} = element;
        if(!song.length) return;
        playingSelectPlaylist("othersPlaylist", 0, song, _id);
    };

    const IsPlaying = () => (
        playing.playlistId === element._id && playing.playlistType === "othersPlaylist" 
            ? <MusicPlaying />
            : <BsFillPlayFill/>
    )

    return (
        <div className={styles.container}>
            <div onClick={onPlay}>
                <IsPlaying />
            </div>
            <div>
                <p> {element.name} </p>
                <small> Songs {element.song.length} - {totalDuration(element.song)} </small>
            </div>
        </div>
    )
}

export default Overview