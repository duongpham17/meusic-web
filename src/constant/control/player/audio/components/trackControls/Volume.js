import styles from './Volume.module.scss';
import React from 'react';
import {MdVolumeMute, MdVolumeDownAlt, MdVolumeUp} from 'react-icons/md';

import Dropdown from '../dropdown';

export const TrackVolume = (props) => {

    const {trackVolume, trackMuted, previousVolume, muteVolume, volume} = props;
    
    return (
        <div className={styles.container}>

            <Dropdown button={ <button>{trackMuted ? <MdVolumeMute/> : trackVolume >= 0.5 ? <MdVolumeUp /> : <MdVolumeDownAlt/> }</button> }>

                <div className={styles.volume}>
                    <MdVolumeMute onClick={trackMuted ? previousVolume : muteVolume}/>
                    <input className={styles.range} type="range" min="0" max="1" step="0.01" value={trackVolume || 0.5} onChange={volume} />
                </div>

            </Dropdown>

        </div>
    );
}

export default TrackVolume;
