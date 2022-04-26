import styles from './Volume.module.scss';
import React from 'react';
import {MdVolumeMute, MdVolumeDownAlt, MdVolumeUp} from 'react-icons/md';

const Volume = (props) => {
    const {trackVolume, trackMuted, previousVolume, onMuteVolume, onVolume} = props;

    return (
        <div className={styles.container}>
            <div className={styles.volume}>
                <button onClick={trackMuted ? previousVolume : onMuteVolume}>
                    {trackMuted ? <MdVolumeMute/> : trackVolume >= 0.5 ? <MdVolumeUp /> : <MdVolumeDownAlt/> }
                </button>
                <input className={styles.range} type="range" min="0" max="1" step="0.01" value={trackVolume} onChange={onVolume} />
            </div>
        </div>
    )
}

export default Volume