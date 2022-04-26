import styles from './Options.module.scss';
import React from 'react';

import {FaRegTrashAlt, FaEdit} from 'react-icons/fa';
import {BsSuitHeartFill, BsSuitHeart, BsFillCollectionPlayFill} from 'react-icons/bs';
import {MdOutlineFileDownload} from 'react-icons/md';

import Dropdown from 'components/dropdown/Dropdown';

export const Options = (props) => {

    const {song, index, setAddSong, setEditSongData, savedPlaylistSave, savedPlaylistRemove, adminDeleteSong, download, utilsDownloadOptions} = props;

    const {playlist} = props.savedPlaylistReducers;

    const {isLoggedIn} = props.authReducers;

    const {user} = props.userReducers;

    const stopPropagation = event => event.stopPropagation();

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    const onDownload = async () => {
        utilsDownloadOptions("start", song.title);
        await download(song.url, song.title, "mp3", 'audio/mp3');
        utilsDownloadOptions("end", song.title);
    };

    const Item = ({onClick, description, icon}) => (
        <li>
            <button onClick={onClick}>
                <span>{description}</span>
                <span>{icon}</span>
            </button>
        </li>
    )

    return (
        <div className={styles.container} onClick={stopPropagation}>
            <Dropdown>
                {        
                    playlist &&                    
                    <ul>

                        {user && user.role === "admin" && 
                            <>  
                                <Item description="Edit" icon={<FaEdit/>} onClick={() => setEditSongData({...song, index})} />
                                <Item description="Delete" icon={<FaRegTrashAlt/>} onClick={() => adminDeleteSong(song._id)} />
                            </>
                        }
                        
                        { isLoggedIn &&
                            <>
                                {                   
                                    alreadyAdded(playlist, song._id) 
                                    ? <Item description="Remove" icon={<BsSuitHeartFill/>} onClick={() => savedPlaylistRemove(song._id)} />
                                    : <Item description="Save" icon={<BsSuitHeart/>} onClick={() => savedPlaylistSave(song._id)} />
                                }

                                <Item description="Playlist" icon={<BsFillCollectionPlayFill/>} onClick={() => setAddSong(song)} />  
                            </>
                        }

                        <Item description="Download" icon={<MdOutlineFileDownload/>} onClick={() => onDownload()} />     

                    </ul>
                }
            </Dropdown>
        </div>
    )
}

export default Options