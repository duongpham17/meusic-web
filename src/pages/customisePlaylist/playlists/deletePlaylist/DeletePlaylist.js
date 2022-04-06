import styles from './DeletePlaylist.module.scss';
import React from 'react';

export const DeletePlaylist = (props) => {

    const {selectedPlaylist, customisePlaylistDelete, setEditMode} = props;

    const onDeletePlaylist = () => {
        customisePlaylistDelete(selectedPlaylist._id);
        setEditMode("")
    }

    return (
        <div className={styles.container}>
            <button onClick={onDeletePlaylist}>DELETE</button>
            <button onClick={() => setEditMode("")}>CANCEL</button>
        </div>
    )
}

export default DeletePlaylist