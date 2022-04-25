import styles from './PlaybackRate.module.scss';
import React from 'react';

import {MdSpeed} from 'react-icons/md';

import Dropdown from '../components/dropdown';

const PlaybackRate = (props) => {

    const {trackPlaybackRate, onPlaybackRate} = props;

    const onPlaybackRateClosure = (value) => () => onPlaybackRate(value);

    console.log(trackPlaybackRate)

    return (
        <div className={styles.container}>
            <Dropdown button={<button><MdSpeed/></button>}>
                <div className={styles.playbackRate}>
                    <button className={`${trackPlaybackRate === 2 && styles.selected}`} onClick={onPlaybackRateClosure(2)}>2.00</button>
                    <button className={`${trackPlaybackRate === 1.75 && styles.selected}`} onClick={onPlaybackRateClosure(1.75)}>1.75</button>
                    <button className={`${trackPlaybackRate === 1.5 && styles.selected}`} onClick={onPlaybackRateClosure(1.5)}>1.50</button>
                    <button className={`${trackPlaybackRate === 1.25 && styles.selected}`} onClick={onPlaybackRateClosure(1.25)}>1.25</button>
                    <button className={`${trackPlaybackRate === 1 && styles.selected}`} onClick={onPlaybackRateClosure(1)}>Normal</button>
                    <button className={`${trackPlaybackRate === 0.75 && styles.selected}`} onClick={onPlaybackRateClosure(0.75)}>0.75</button>
                    <button className={`${trackPlaybackRate === 0.50 && styles.selected}`} onClick={onPlaybackRateClosure(0.50)}>0.50</button>
                    <button className={`${trackPlaybackRate === 0.25 && styles.selected}`} onClick={onPlaybackRateClosure(0.25)}>0.25</button>
                </div>
            </Dropdown>
        </div>
    )
}

export default PlaybackRate;