import styles from './Options.module.scss';
import React from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import Dropdown from 'components/dropdown';

export const Options = (props) => {

    const {savedPlaylistRemove, song, setAddSong, download, utilsDownloadOptions} = props;

    const onDownload = async () => {
        utilsDownloadOptions("start", song.title);
        await download(song.url, song.title, "mp3");
        utilsDownloadOptions("end", song.title);
    };

    const onRemove = () => savedPlaylistRemove(song._id);

    return (
        <div className={styles.container}>
            
            <Dropdown>
                <ul>
                    <li onClick={() => setAddSong(song)}> 
                        <span>Playlist</span>
                        <BsFillCollectionPlayFill/> 
                    </li>
                    <li onClick={onDownload}>
                        <span>Download</span>
                        <MdOutlineFileDownload/>
                    </li>
                    <li onClick={onRemove}>
                        <span>Remove</span>
                        <FaRegTrashAlt/>
                    </li>
                </ul>
            </Dropdown>

        </div>
    )
}

export default Options