import styles from './Save.module.scss';
import React from 'react';

import {BsSuitHeartFill, BsSuitHeart} from 'react-icons/bs';

export const Save = (props) => {

    const {song, savedPlaylist , savedPlaylistAddTo, savedPlaylistRemoveFrom} = props;

    const {playlist} = savedPlaylist;

    const stopPropagation = event => event.stopPropagation();

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    return (
        playlist &&                    
            <div className={styles.container} onClick={stopPropagation}>
                {
                    alreadyAdded(playlist, song._id) 
                    ?
                    <button><BsSuitHeartFill onClick={() => savedPlaylistRemoveFrom(song._id)}/></button>
                    : 
                    <button><BsSuitHeart onClick={() => savedPlaylistAddTo(song._id)}/></button>
                }
            </div>
    )
}

export default Save