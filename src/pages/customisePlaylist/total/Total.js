import styles from './Total.module.scss';
import React from 'react';

const Total = (props) => {
    
    const {playlist} = props.customisePlaylistReducers;

    return (
        <div className={styles.container}>
            <p><b>PLAYLISTS {playlist.length}</b></p>
        </div>
    )
}

export default Total