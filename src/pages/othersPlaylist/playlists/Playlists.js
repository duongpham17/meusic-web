import styles from './Playlists.module.scss';
import React from 'react';

import {connect} from 'react-redux';
import {customisePlaylistSaveOthers} from 'redux/actions/customisePlaylistActions';
import {othersPlaylistGet, othersPlaylistDelete} from 'redux/actions/othersPlaylistActions';
import {playingSelectPlaylist} from 'redux/actions/playingActions';

import useApiGet from 'hooks/useApiGet';

import Element from './Element';

export const Playlists = (props) => {

    const {othersPlaylist, othersPlaylistGet} = props;

    useApiGet(othersPlaylistGet, othersPlaylist.playlist);
    
    const {playlist} = othersPlaylist;

    const TotalPlaylist = () => ( !!playlist.length &&
        <div>
            <p><b>PLAYLISTS {playlist.length}</b></p>
        </div>
    );

    return ( playlist &&
        <div className={styles.container}>

            <TotalPlaylist/>

            {playlist.map(el => el &&
                <div className={styles.element} key={el._id}>
                    <Element {...props} element={el} />
                </div>    
            )}

        </div>
    )
}

const mapStateToProps = state => ({
    playing: state.playingReducers,
    othersPlaylist: state.othersPlaylistReducers,
});

const mapDispatchToProps = {
    othersPlaylistGet,
    playingSelectPlaylist,
    customisePlaylistSaveOthers,
    othersPlaylistDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)