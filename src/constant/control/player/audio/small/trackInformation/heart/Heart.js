import styles from './Heart.module.scss';
import React from 'react';

import {BsSuitHeartFill, BsSuitHeart} from 'react-icons/bs';

export const Heart = (props) => {

    const {trackPlaying, savedPlaylistRemove, savedPlaylistSave} = props;

    const {playlist} = props.savedPlaylistReducers;

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    return (
        <div className={styles.container}>
            { alreadyAdded(playlist, trackPlaying._id) 
                ?
                    <button onClick={() => savedPlaylistRemove(trackPlaying._id)}>
                        <BsSuitHeartFill />
                    </button>
                : 
                    <button onClick={() => savedPlaylistSave(trackPlaying._id)}>
                        <BsSuitHeart />
                    </button>
            }
        </div>
    )
}

export default Heart