import styles from './AddToPlaylist.module.scss';
import React from 'react';
import useApiGet from 'hooks/useApiGet';
import {Link} from 'react-router-dom';

export const AddToPlaylist = (props) => {
    const {customisePlaylist, customisePlaylistGet, customisePlaylistUpdate, addSong, setAddSong} = props;

    useApiGet(customisePlaylistGet, customisePlaylist.playlist.length);

    const onAddSongToPlaylist = (index) => (event) => {
        event.stopPropagation();
        const newPlaylist = customisePlaylist.playlist[index];
        newPlaylist.song.unshift(addSong);
        customisePlaylistUpdate(newPlaylist)
    };

    return ( customisePlaylist.playlist &&
        <div className={styles.container} onClick={() => setAddSong("")}>

            {
                !customisePlaylist.playlist &&
                <div className={styles.map}>
                    <Link to="/customise">Go to customise playlist to get started</Link>
                </div>
            }
            
            {   
                customisePlaylist.playlist &&
                <div className={styles.map}>
                    {customisePlaylist.playlist.map((el, i) => 
                        <div key={el._id} className={styles.element} onClick={onAddSongToPlaylist(i)}>
                            <b>{el.name}</b>
                            <p>{el.song.length}</p>
                        </div>    
                    )}
                </div>
            }

        </div>
    )
};

export default AddToPlaylist;