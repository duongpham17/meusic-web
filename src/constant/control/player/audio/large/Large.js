import styles from './Large.module.scss';
import React from 'react';

import TrackResize from './trackResize';
import TrackInformation from './trackInformation';
import TrackPlayer from './trackPlayer';
import TrackProgress from './trackProgress';
import TrackControls from './trackControls';
import TrackPlaylist from './trackPlaylist';

const Large = (props) => {
    
    const {onResize} = props;

    return (
        <div className={styles.container} onDragEnd={() => onResize("small")} draggable>  
            <TrackResize {...props}/>
            <TrackInformation {...props}/>
            <TrackPlayer {...props}/>
            <TrackProgress {...props}/>
            <TrackControls {...props}/>
            <TrackPlaylist {...props}/>
        </div>
    )
}

export default Large