import styles from './Customise.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {MdAdd} from 'react-icons/md';

const Customise = (props) => {
    const {customisePlaylist, customisePlaylistGet, emitUpdateSong, params, setAlert} = props;

    const onAddPlaylist = (playlist) => () => {
        const song = playlist.song;

        const data = {
            type: "addPlaylist",
            room: params.room,
            song,
        }

        emitUpdateSong(data);
        setAlert(`${playlist.name} playlist has been added`);
    };

    return (
        <div className={styles.container}>

            {!customisePlaylist.playlist ?
                <button className={styles.get} onClick={customisePlaylistGet}>Get Playlist</button>
            : 
            <div>
                {
                customisePlaylist.playlist.length 
                    ? customisePlaylist.playlist.map(el => 
                    <div className={styles.element} key={el._id} onClick={onAddPlaylist(el)}>
                        <button>
                            <span>{el.name}</span>
                            <span><MdAdd/></span>
                        </button>
                    </div>    
                ) 
                    : 
                    <div>
                        <Link to="/customise">Nothing has been created, go to customise.</Link>
                    </div>
            }
            </div>
            }

        </div>
    )
}

export default Customise;