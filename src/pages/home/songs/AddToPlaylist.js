import styles from './AddToPlaylist.module.scss';
import React from 'react';
import useApiGet from 'hooks/useApiGet';
import {Link} from 'react-router-dom';

import Cover from 'components/cover';

export const AddToPlaylist = (props) => {
    const { customisePlaylistGet, customisePlaylistUpdate, addSong, setAddSong} = props;

    const {playlist} = props.customisePlaylistReducers;

    useApiGet(customisePlaylistGet, playlist.length);

    const onAddSongToPlaylist = (index) => (event) => {
        event.stopPropagation();
        const newPlaylist = playlist[index];
        newPlaylist.song.unshift(addSong);
        customisePlaylistUpdate(newPlaylist)
    };

    return ( playlist &&
        <div className={styles.container} onClick={() => setAddSong("")}>
            <Cover>
                {
                    !playlist.length &&
                    <div className={styles.map}>
                        <Link to="/customise">Go to customise playlist to get started</Link>
                    </div>
                }
                
                {   
                    !!playlist.length &&
                    <div className={styles.map}>
                        {playlist.map((el, i) => 
                            <div key={el._id} className={styles.element} onClick={onAddSongToPlaylist(i)}>
                                <b>{el.name}</b>
                                <p>{el.song.length}</p>
                            </div>    
                        )}
                    </div>
                }
            </Cover>
        </div>
    )
};

export default AddToPlaylist;