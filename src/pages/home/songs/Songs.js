import styles from './Songs.module.scss';
import React, {useState} from 'react';

import { connect } from 'react-redux';
import { adminUpdateSong } from 'redux/actions/adminActions';
import { previewGetSongs } from 'redux/actions/previewPlaylistActions';
import { savedPlaylistSave, savedPlaylistRemove } from 'redux/actions/savedPlaylistActions';
import { playingPreviewSelectPlaylist } from 'redux/actions/playingActions';
import { customisePlaylistGet, customisePlaylistUpdate } from 'redux/actions/customisePlaylistActions';
import { adminDeleteSong } from 'redux/actions/adminActions';
import { utilsDownloadOptions } from 'redux/actions/utilsActions';

import useApiGet from 'hooks/useApiGet';
import useUrlDownload from 'hooks/useUrlDownload';

import Information from './Information';
import Options from './Options';
import AddToPlaylist from './AddToPlaylist';
import EditSong from './EditSong';

export const Songs = (props) => {

    const {playingPreviewSelectPlaylist, previewGetSongs} = props;

    const {playlist} = props.previewPlaylistReducers;

    const [addSong, setAddSong] = useState("");
    const [editSongData, setEditSongData] = useState("");

    useApiGet(previewGetSongs, playlist);
    const {download} = useUrlDownload();

    const onPlay = (song) => () =>  playingPreviewSelectPlaylist(song);

    props = {
        ...props,
        addSong,
        setAddSong,
        editSongData,
        setEditSongData,
        download
    }

    return ( !playlist ?           
        <div className={styles.loading}>
            <iframe src='https://my.spline.design/untitled-a18a8cb39533eb67727c8b7eecdb9d87/' title="loading-cube" frameBorder="0" scrolling="no" width="100%" height="100%"></iframe>
        </div>
        :
        <div className={styles.container}>
            {playlist.map((el, index) => 
                <div key={el._id} className={styles.element} onClick={onPlay(el)}>
                    <Information {...props} song={el} index={index} />
                    <Options {...props} song={el} index={index}/>
                </div>    
            )}

            {addSong && <AddToPlaylist {...props} />}
            {editSongData && <EditSong {...props} /> }

        </div>
    );
};

const mapStateToProps = state => ({
    authReducers: state.authReducers,
    userReducers: state.userReducers,
    playingReducers: state.playingReducers,
    savedPlaylistReducers: state.savedPlaylistReducers,
    previewPlaylistReducers: state.previewPlaylistReducers,
    customisePlaylistReducers: state.customisePlaylistReducers
});

const mapDispatchToProps = {
    adminDeleteSong,
    savedPlaylistSave,
    savedPlaylistRemove,
    playingPreviewSelectPlaylist,
    previewGetSongs,
    customisePlaylistGet, 
    customisePlaylistUpdate,
    adminUpdateSong,
    utilsDownloadOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);