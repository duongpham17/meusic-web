import styles from './Volume.module.scss';
import React from 'react';
import {MdVolumeMute, MdVolumeDownAlt, MdVolumeUp} from 'react-icons/md';

import Dropdown from '../components/dropdown';

export const TrackVolume = (props) => {

    const {trackVolume, trackMuted, onPreviousVolume, onMuteVolume, onVolume} = props;
    
    return (
        <div className={styles.container}>

            <Dropdown button={ <button>{trackMuted ? <MdVolumeMute/> : trackVolume >= 0.5 ? <MdVolumeUp /> : <MdVolumeDownAlt/> }</button> }>

                <div className={styles.volume}>
                    <MdVolumeMute onClick={trackMuted ? onPreviousVolume : onMuteVolume}/>
                    <input className={styles.range} type="range" min="0" max="1" step="0.01" value={trackVolume || 0.5} onChange={onVolume} />
                </div>

            </Dropdown>

        </div>
    );
}

export default TrackVolume;
