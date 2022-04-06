import styles from './Songs.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { previewGetSongs } from 'redux/actions/previewPlaylistActions';
import { savedPlaylistAddTo, savedPlaylistRemoveFrom } from 'redux/actions/savedPlaylistActions';
import { playingPreviewSelectPlaylist } from 'redux/actions/playingActions';
import { adminDeleteSong } from 'redux/actions/adminActions';

import useApiGet from 'hooks/useApiGet';

import Admin from './Admin';
import Information from './Information';
import Save from './Save';

export const Songs = (props) => {

    const {previewPlaylist, playingPreviewSelectPlaylist, previewGetSongs} = props;

    useApiGet(previewGetSongs, previewPlaylist.songs);

    const onPlay = (song) => () =>  playingPreviewSelectPlaylist(song);

    return ( !previewPlaylist.songs ? <div className="loading" /> :
        <div className={styles.container}>

            {previewPlaylist.songs.map((el, index) => 
                <div key={el._id} className={styles.element} onClick={onPlay(el)}>

                    <Admin {...props} song={el} />
                    
                    <Information {...props} song={el} index={index} show />

                    <Save {...props} song={el} />

                </div>    
            )}

        </div>
    );
};

const mapStateToProps = state => ({
    user: state.userReducers,
    playing: state.playingReducers,
    savedPlaylist: state.savedPlaylistReducers,
    previewPlaylist: state.previewPlaylistReducers,
});

const mapDispatchToProps = {
    adminDeleteSong,
    savedPlaylistAddTo,
    savedPlaylistRemoveFrom,
    playingPreviewSelectPlaylist,
    previewGetSongs
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);