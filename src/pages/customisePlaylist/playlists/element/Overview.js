import styles from './Overview.module.scss';
import React from 'react';

import {BsFillPlayFill} from 'react-icons/bs';

import { HourMin } from 'utils/time';
import MusicPlaying from 'components/musicPlaying';

const Overview = (props) => {

    const {element, playingSelectPlaylist} = props;

    const {playlistId, playlistType} = props.playingReducers;

    const onPlayPlaylist = (element) => (event) => {
        event.stopPropagation();
        const {song, _id} = element;
        if(!song.length) return;
        playingSelectPlaylist("customisePlaylist", 0, song, _id );
    };

    const totalDuration = (array) => HourMin(array.reduce((acc, current) =>  acc + current.duration, 0));

    const IsPlaying = () => (
        playlistId === element._id && playlistType === "customisePlaylist" 
            ? <MusicPlaying />
            : <BsFillPlayFill/>
    )

    return (
        <div className={styles.container}>
            <div onClick={onPlayPlaylist(element)}>
                <IsPlaying/>
            </div>

            <div>
                <p> <span>{element.new && "new - "} </span> {element.name} </p>
                <small> {!!element.song.length && `Songs ${element.song.length} - ${totalDuration(element.song)}`} </small>
            </div>
        </div>
    )
}

export default Overview