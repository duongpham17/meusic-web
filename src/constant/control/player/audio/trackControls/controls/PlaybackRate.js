import styles from './PlaybackRate.module.scss';
import React from 'react';

import {MdSpeed} from 'react-icons/md';

import Dropdown from '../components/Dropdown';

const PlaybackRate = (props) => {

    const {audio, playbackRate} = props;

    return (
        <div className={styles.container}>
            <Dropdown button={<button><MdSpeed/></button>}>
                <div className={styles.playbackRate}>
                    <button className={`${audio.current.playbackRate === 2 && styles.selected}`} onClick={() => playbackRate(2)}>2.00</button>
                    <button className={`${audio.current.playbackRate === 1.75 && styles.selected}`} onClick={() => playbackRate(1.75)}>1.75</button>
                    <button className={`${audio.current.playbackRate === 1.5 && styles.selected}`} onClick={() => playbackRate(1.5)}>1.50</button>
                    <button className={`${audio.current.playbackRate === 1.25 && styles.selected}`} onClick={() => playbackRate(1.25)}>1.25</button>
                    <button className={`${audio.current.playbackRate === 1 && styles.selected}`} onClick={() => playbackRate(1)}>Normal</button>
                    <button className={`${audio.current.playbackRate === 0.75 && styles.selected}`} onClick={() => playbackRate(0.75)}>0.75</button>
                    <button className={`${audio.current.playbackRate === 0.50 && styles.selected}`} onClick={() => playbackRate(0.50)}>0.50</button>
                    <button className={`${audio.current.playbackRate === 0.25 && styles.selected}`} onClick={() => playbackRate(0.25)}>0.25</button>
                </div>
            </Dropdown>
        </div>
    )
}

export default PlaybackRate;