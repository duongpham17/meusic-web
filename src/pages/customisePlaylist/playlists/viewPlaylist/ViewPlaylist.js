import styles from './ViewPlaylist.module.scss';
import React from 'react';
import {generateid} from 'utils/generateid';

import SongInformationLayout2 from 'components/informationLayout/Layout2';

export const ViewPlaylist = (props) => {

    const {playing, playingSelectPlaylist, selectedPlaylist} = props;

    const isPlaying = (index) => {
        if(playing.playlistType !== "customisePlaylist") return false;
        if(playing.playlistId === selectedPlaylist._id && index === playing.song.index) return true;
    }

    const onPlay = (index) => () => {
        playingSelectPlaylist("customisePlaylist", index, selectedPlaylist.song, selectedPlaylist._id);
    };

    return (
        <div className={styles.container}>
            {selectedPlaylist?.song.map((el, i) => 
                <div className={styles.element} key={generateid()} onClick={onPlay(i)}>
                    <SongInformationLayout2 song={el} index={i} isPlaying={isPlaying(i)} />
                </div>    
            )}
        </div>
    )
}

export default ViewPlaylist
