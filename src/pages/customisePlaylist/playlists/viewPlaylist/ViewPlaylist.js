import styles from './ViewPlaylist.module.scss';
import React from 'react';
import {generateid} from 'utils/generateid';

import SongInformationLayout2 from 'components/informationLayout/Layout2';

export const ViewPlaylist = (props) => {

    const {playingSelectPlaylist, selectedPlaylist} = props;

    const {playlistType, playlistId, song} = props.playingReducers;

    const isPlaying = (index) => {
        if(playlistType !== "customisePlaylist") return false;
        if(playlistId === selectedPlaylist._id && index === song.index) return true;
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
