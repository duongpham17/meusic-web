import styles from './Options.module.scss';
import React from 'react';

import {BsSuitHeartFill, BsSuitHeart, BsPlus} from 'react-icons/bs';

import Dropdown from 'components/dropdown/Dropdown';

export const Options = (props) => {

    const {song, savedPlaylist, setAddSong, savedPlaylistAddTo, savedPlaylistRemoveFrom} = props;

    const {playlist} = savedPlaylist;

    const stopPropagation = event => event.stopPropagation();

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    return (
        <div className={styles.container} onClick={stopPropagation}>
            <Dropdown>
                {        
                    playlist &&                    
                    <ul>
                        <li>                        
                            {
                                alreadyAdded(playlist, song._id) 
                                ?
                                <button onClick={() => savedPlaylistRemoveFrom(song._id)}>
                                    <span>Remove</span>
                                    <span><BsSuitHeartFill className={styles.heart}/></span>
                                </button>
                                : 
                                <button onClick={() => savedPlaylistAddTo(song._id)}>
                                    <span>Save</span>
                                    <span><BsSuitHeart className={styles.heart}/></span>
                                </button>
                            }
                        </li>
                        <li>
                            <button onClick={() => setAddSong(song)}>
                                <span>Playlist</span>
                                <span><BsPlus/></span>
                            </button>
                        </li>
                    </ul>
                }
            </Dropdown>
        </div>
    )
}

export default Options