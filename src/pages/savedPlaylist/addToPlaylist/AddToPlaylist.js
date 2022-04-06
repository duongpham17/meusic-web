import styles from './AddToPlaylist.module.scss';
import React from 'react';
import useApiGet from 'hooks/useApiGet';
import { customisePlaylistGet, customisePlaylistUpdate } from 'redux/actions/customisePlaylistActions';
import { connect } from 'react-redux';
import {MdAdd} from 'react-icons/md';

export const AddToPlaylist = (props) => {
    const {customisePlaylist, customisePlaylistGet, addSong, setAddSong, customisePlaylistUpdate} = props;

    useApiGet(customisePlaylistGet, customisePlaylist.playlist.length);

    const onAddSongToPlaylist = (index) => (event) => {
        event.stopPropagation();
        const newPlaylist = customisePlaylist.playlist[index];
        newPlaylist.song.unshift(addSong);
        customisePlaylistUpdate(newPlaylist)
    };

    const onClose = () => {
        setAddSong("")
    }

    return ( customisePlaylist.playlist &&
        <div className={styles.container} onClick={onClose}>
            
            <div className={styles.map}>
                {customisePlaylist.playlist.map((el, i) => 
                    <div key={el._id} className={styles.element} onClick={onAddSongToPlaylist(i)}>
                        <div>
                            <b>{el.name}</b>
                            <p>Songs - {el.song.length}</p>
                        </div>
                        <div>
                            <MdAdd/>
                        </div>
                    </div>    
                )}
            </div>

        </div>
    )
};

const mapDispatchToProps = {
    customisePlaylistGet,
    customisePlaylistUpdate
}

export default connect(null, mapDispatchToProps)(AddToPlaylist)