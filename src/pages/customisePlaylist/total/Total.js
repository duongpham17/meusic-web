import styles from './Total.module.scss';
import React from 'react';

const Total = (props) => {
    const {customisePlaylist:{playlist}} = props;

    return (
        <div className={styles.container}>
            <p><b>PLAYLISTS {playlist.length}</b></p>
        </div>
    )
}

export default Total