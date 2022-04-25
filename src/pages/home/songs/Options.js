import styles from './Options.module.scss';
import React from 'react';

import {FaRegTrashAlt, FaEdit} from 'react-icons/fa';
import {BsSuitHeartFill, BsSuitHeart, BsFillCollectionPlayFill} from 'react-icons/bs';
import {MdOutlineFileDownload} from 'react-icons/md';

import Dropdown from 'components/dropdown/Dropdown';

export const Options = (props) => {

    const {song, auth, index, savedPlaylist, setAddSong, setEditSongData, savedPlaylistAddTo, savedPlaylistRemoveFrom, user, adminDeleteSong, download, utilsDownloadOptions} = props;

    const {playlist} = savedPlaylist;

    const stopPropagation = event => event.stopPropagation();

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    const onDownload = async () => {
        utilsDownloadOptions("start", song.title);
        await download(song.url, song.title, "mp3", 'audio/mp3');
        utilsDownloadOptions("end", song.title);
    };

    return (
        <div className={styles.container} onClick={stopPropagation}>
            <Dropdown>
                {        
                    playlist &&                    
                    <ul>

                        {user && user.user.role === "admin" && 
                            <>
                                <li>
                                    <button onClick={() => setEditSongData({...song, index})}>
                                        <span>Edit</span>
                                        <span><FaEdit /></span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => adminDeleteSong(song._id)}>
                                        <span>Delete</span>
                                        <span><FaRegTrashAlt /></span>
                                    </button>
                                </li>
                            </>
                        }
                        
                        { auth.isLoggedIn &&
                            <>
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
                                        <span><BsFillCollectionPlayFill/></span>
                                    </button>
                                </li>
                            </>
                        }


                        <li>
                            <button onClick={onDownload}>
                                <span>Download</span>
                                <span><MdOutlineFileDownload/></span>
                            </button>
                        </li>

                    </ul>
                }
            </Dropdown>
        </div>
    )
}

export default Options