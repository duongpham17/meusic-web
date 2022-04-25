import styles from './Playlists.module.scss';
import React from 'react';

import {connect} from 'react-redux';
import {customisePlaylistSaveOthers} from 'redux/actions/customisePlaylistActions';
import {othersPlaylistGet, othersPlaylistDelete} from 'redux/actions/othersPlaylistActions';
import {playingSelectPlaylist} from 'redux/actions/playingActions';

import useApiGet from 'hooks/useApiGet';

import Total from './total';
import Songs from './songs';

export const Playlists = (props) => {

    const {othersPlaylistGet} = props;

    const {playlist} = props.othersPlaylistReducers;

    useApiGet(othersPlaylistGet, playlist.length);

    return ( !playlist ? <div className='loading' /> :
        <div className={styles.container}>

            <Total {...props} />
            
            <Songs {...props} />

        </div>
    )
};

const mapStateToProps = state => ({
    playingReducers: state.playingReducers,
    othersPlaylistReducers: state.othersPlaylistReducers,
});

const mapDispatchToProps = {
    othersPlaylistGet,
    playingSelectPlaylist,
    customisePlaylistSaveOthers,
    othersPlaylistDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)