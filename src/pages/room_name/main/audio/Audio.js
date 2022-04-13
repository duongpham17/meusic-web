import styles from './Audio.module.scss';
import React from 'react';

import Player from './player';
import Playlist from './playlist';

const Audio = (props) => {

    const {roomData, roomPlaying} = props;

    return (    
        <div className={styles.container}>
            {
                !roomData
            ? 
                <div className="loading" /> 
            : 
                !roomData.songs.length 
            ? 
                <div className={styles.empty}>
                    <p>Empty</p>
                </div> 
            :   
                <>
                    { roomPlaying && <Player {...props} /> }
                    <Playlist {...props} />
                </>
            }
        </div>
    )
}

export default Audio