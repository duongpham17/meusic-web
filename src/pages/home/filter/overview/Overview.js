import styles from './Overview.module.scss';
import React from 'react';

import { connect } from 'react-redux';

import { previewGetTotalSongs } from 'redux/actions/previewPlaylistActions';

import useApiGet from 'hooks/useApiGet';

const Information = (props) => {

    const {previewGetTotalSongs, previewPlaylist, onOpen} = props;

    useApiGet(previewGetTotalSongs, previewPlaylist.total);

    return (
        <div className={styles.container} onClick={onOpen}>
            <b>SONGS {previewPlaylist.songs.length} / {previewPlaylist.total}</b>
            <b>Filter</b>
        </div>
    )
};

const mapStateToProps = state => ({
    previewPlaylist: state.previewPlaylistReducers,
});

const mapDispatchToProps = {
    previewGetTotalSongs
};

export default connect(mapStateToProps, mapDispatchToProps)(Information)