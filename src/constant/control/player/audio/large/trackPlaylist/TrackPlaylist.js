import styles from './TrackPlaylist.module.scss'
import React from 'react';

import InformationLayout1 from 'components/informationLayout/Layout3';

const TrackPlaylist = (props) => {

    const {playing, playingChangeSong} = props;

    const isPlaying = (element) => playing.playlistType === "previewPlaylist" ?  playing.song.previewId === element.previewId : playing.song._id === element._id;

    const onPlay = (index) => () => playingChangeSong(index);
    
    return (
        <div className={styles.container}>

            <div className={styles.overview}>
                <b>SONG {playing.song.index+1} / {playing.playlist.length}</b>
            </div>

            <div className={styles.map}>
                {playing.playlist.map((el, index) => 
                    <div className={styles.element} key={el.previewId || el._id} onClick={onPlay(index)}>
                        <InformationLayout1 song={el} index={index} isPlaying={isPlaying(el)} />  
                    </div>  
                )}
            </div>
        </div>
    )
}

export default TrackPlaylist