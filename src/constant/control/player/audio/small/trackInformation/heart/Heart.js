import styles from './Heart.module.scss';
import React from 'react';

import {BsSuitHeartFill, BsSuitHeart} from 'react-icons/bs';

export const Heart = (props) => {

    const {trackPlaying, savedPlaylist, savedPlaylistRemoveFrom, savedPlaylistAddTo} = props;

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    return (
        <div className={styles.container}>
            { alreadyAdded(savedPlaylist.playlist, trackPlaying._id) 
                ?
                    <button onClick={() => savedPlaylistRemoveFrom(trackPlaying._id)}>
                        <BsSuitHeartFill />
                    </button>
                : 
                    <button onClick={() => savedPlaylistAddTo(trackPlaying._id)}>
                        <BsSuitHeart />
                    </button>
            }
        </div>
    )
}

export default Heart