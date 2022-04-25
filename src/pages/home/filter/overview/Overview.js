import styles from './Overview.module.scss';
import React from 'react';

import useApiGet from 'hooks/useApiGet';

const Overview = (props) => {

    const {previewGetTotalSongs, onOpen} = props;

    const {playlist, total} = props.previewPlaylistReducers;

    useApiGet(previewGetTotalSongs, total);

    return (
        <div className={styles.container} onClick={onOpen}>
            <b>SONGS {playlist.length} / {total}</b>
            <b>Filter</b>
        </div>
    )
};

export default Overview