import styles from './Songs.module.scss';
import React, {useState} from 'react';

import { connect } from 'react-redux';
import { adminUpdateSong } from 'redux/actions/adminActions';
import { previewGetSongs } from 'redux/actions/previewPlaylistActions';
import { savedPlaylistAddTo, savedPlaylistRemoveFrom } from 'redux/actions/savedPlaylistActions';
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

    const {previewPlaylist, playingPreviewSelectPlaylist, previewGetSongs} = props;

    const [addSong, setAddSong] = useState("");
    const [editSongData, setEditSongData] = useState("");

    useApiGet(previewGetSongs, previewPlaylist.songs);
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

    return ( !previewPlaylist.songs ? <div className="loading" /> :
        <div className={styles.container}>

            {previewPlaylist.songs.map((el, index) => 
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
    auth: state.authReducers,
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
    customisePlaylistUpdate,
    adminUpdateSong,
    utilsDownloadOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);