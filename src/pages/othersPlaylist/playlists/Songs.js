import styles from './Songs.module.scss';
import React from 'react';
import {generateid} from 'utils/generateid';

import SongInformationLayout2 from 'components/informationLayout/Layout2';

export const Songs = (props) => {

    const {element, playing, playingSelectPlaylist} = props;

    const isPlaying = (id, index) => playing.playlistType === "othersPlaylist" && playing.song._id === id && playing.song.index === index;

    const onPlay = (e, index) => {
        e.stopPropagation();
        playingSelectPlaylist("othersPlaylist", index, element.song, element._id);
    };

    return (
        <div className={styles.container}>

            {element.song.map((el, i) => 
                <div className={styles.element} key={generateid()} onClick={(e) => onPlay(e, i)}>
                    <SongInformationLayout2 song={el} index={i} isPlaying={isPlaying(el._id, i)} />
                </div>    
            )}

        </div>
    )
}

export default Songs
