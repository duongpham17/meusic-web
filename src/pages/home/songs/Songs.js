import styles from './Songs.module.scss';
import React, {useState} from 'react';

import { connect } from 'react-redux';
import { previewGetSongs } from 'redux/actions/previewPlaylistActions';
import { savedPlaylistAddTo, savedPlaylistRemoveFrom } from 'redux/actions/savedPlaylistActions';
import { playingPreviewSelectPlaylist } from 'redux/actions/playingActions';
import { customisePlaylistGet, customisePlaylistUpdate } from 'redux/actions/customisePlaylistActions';
import { adminDeleteSong } from 'redux/actions/adminActions';

import useApiGet from 'hooks/useApiGet';

import Information from './Information';
import Options from './Options';
import AddToPlaylist from './AddToPlaylist';

export const Songs = (props) => {

    const {previewPlaylist, playingPreviewSelectPlaylist, previewGetSongs} = props;

    const [addSong, setAddSong] = useState("");

    useApiGet(previewGetSongs, previewPlaylist.songs);

    const onPlay = (song) => () =>  playingPreviewSelectPlaylist(song);

    props = {
        ...props,
        addSong,
        setAddSong
    }

    return ( !previewPlaylist.songs ? <div className="loading" /> :
        <div className={styles.container}>

            {previewPlaylist.songs.map((el, index) => 
                <div key={el._id} className={styles.element} onClick={onPlay(el)}>
                    
                    <Information {...props} song={el} index={index} />

                    <Options {...props} song={el} />

                </div>    
            )}

            {addSong && <AddToPlaylist {...props} />}

        </div>
    );
};

const mapStateToProps = state => ({
    user: state.userReducers,
    playing: state.playingReducers,
    savedPlaylist: state.savedPlaylistReducers,
    previewPlaylist: state.previewPlaylistReducers,
    customisePlaylist: state.customisePlaylistReducers
});

const mapDispatchToProps = {
    adminDeleteSong,
    savedPlaylistAddTo,
    savedPlaylistRemoveFrom,
    playingPreviewSelectPlaylist,
    previewGetSongs,
    customisePlaylistGet, 
    customisePlaylistUpdate 
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);