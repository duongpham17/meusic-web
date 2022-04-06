import styles from './Audio.module.scss';
import React from 'react';

import Player from './player';
import Playlist from './playlist';

const Audio = (props) => {

    const {roomData, roomPlaying} = props;

    return (    
        <section className={styles.container}>
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
        </section>
    )
}

export default Audio