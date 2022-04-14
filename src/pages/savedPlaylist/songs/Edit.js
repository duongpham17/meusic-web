import styles from './Edit.module.scss';
import React from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import Dropdown from 'components/dropdown';

export const Edit = (props) => {

    const {savedPlaylistRemoveFrom, song, setAddSong, download, utilsDownloadOptions} = props;

    const onRemove = () => savedPlaylistRemoveFrom(song._id);

    const onDownload = async () => {
        utilsDownloadOptions("start", song.title);
        await download(song.url, song.title, "mp3");
        utilsDownloadOptions("end", song.title);
    }

    return (
        <div className={styles.container}>
            
            <Dropdown>
                <ul>
                    <li onClick={() => setAddSong(song)}> 
                        <span>Add</span>
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

export default Edit