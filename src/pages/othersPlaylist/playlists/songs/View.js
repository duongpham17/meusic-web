import styles from './View.module.scss';
import React from 'react';
import {generateid} from 'utils/generateid';

import SongInformationLayout2 from 'components/informationLayout/Layout2';

export const View = (props) => {

    const {element, playingSelectPlaylist} = props;

    const {playlistType, song} = props.playingReducers;

    const isPlaying = (id, index) => playlistType === "othersPlaylist" && song._id === id && song.index === index;

    const onPlay = (index) => () =>  playingSelectPlaylist("othersPlaylist", index, element.song, element._id);

    return (
        <div className={styles.container}>

            {element.song.map((el, i) => 
                <div className={styles.element} key={generateid()} onClick={onPlay(i)}>
                    <SongInformationLayout2 song={el} index={i} isPlaying={isPlaying(el._id, i)} />
                </div>    
            )}

        </div>
    )
}

export default View
