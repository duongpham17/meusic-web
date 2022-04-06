import styles from './UpdateButton.module.scss';
import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md'

const UpdateButton = (props) => {

    const {customisePlaylistUpdate, selectedPlaylist, setEdited} = props;

    const onUpdatePlaylist = () =>{
        customisePlaylistUpdate(selectedPlaylist);
        setEdited(false);
    };

    return (
        <div className={styles.container}>
            <button onClick={onUpdatePlaylist}>
                <p>UPDATE</p>
                <MdKeyboardArrowRight/>
            </button>
        </div>
  )
}

export default UpdateButton