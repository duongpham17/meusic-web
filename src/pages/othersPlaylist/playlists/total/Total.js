import styles from './Total.module.scss';
import React from 'react';

const Total = (props) => {

    const {playlist} = props.othersPlaylistReducers;

    return (
        <div className={styles.container}>
            { !!playlist.length &&
                <p><b>PLAYLISTS {playlist.length}</b></p>
            }
        </div>
    )
}

export default Total