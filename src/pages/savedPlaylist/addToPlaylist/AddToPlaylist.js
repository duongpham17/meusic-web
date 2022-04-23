import styles from './AddToPlaylist.module.scss';
import React from 'react';
import {Link} from "react-router-dom";
import useApiGet from 'hooks/useApiGet';
import { customisePlaylistGet, customisePlaylistUpdate } from 'redux/actions/customisePlaylistActions';
import { connect } from 'react-redux';

export const AddToPlaylist = (props) => {
    const {customisePlaylist, customisePlaylistGet, addSong, setAddSong, customisePlaylistUpdate} = props;

    useApiGet(customisePlaylistGet, customisePlaylist.playlist.length);

    const onAddSongToPlaylist = (index) => (event) => {
        event.stopPropagation();
        const newPlaylist = customisePlaylist.playlist[index];
        newPlaylist.song.unshift(addSong);
        customisePlaylistUpdate(newPlaylist)
    };

    const onClose = () => setAddSong("");

    return ( customisePlaylist.playlist &&
        <div className={styles.container} onClick={onClose}>
            
            <div className={styles.map}>
                
                {!customisePlaylist.playlist &&
                    <div className={styles.map}>
                        <Link to="/customise">Go to customise playlist to get started</Link>
                    </div>
                }

                { customisePlaylist.playlist &&
                    customisePlaylist.playlist.map((el, i) => 
                    <div key={el._id} className={styles.element} onClick={onAddSongToPlaylist(i)}>
                        <b>{el.name}</b>
                        <p>{el.song.length}</p>
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