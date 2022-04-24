import styles from './EditSong.module.scss';
import React from 'react';

import Cover from 'components/cover';
import useBasicForm from 'hooks/useBasicForm';

const UpdateSong = (props) => {

    const {setEditSongData, editSongData, adminUpdateSong} = props;
    
    const {value, onChange, onSubmit, onStopPropagation} = useBasicForm(editSongData);

    const callback = () => adminUpdateSong(value);

    return (
        <Cover onClose={() => setEditSongData("")}>
            <div className={styles.container}>
                <form onSubmit={onSubmit(callback)} onClick={onStopPropagation}>

                    <label>Title</label>
                    <textarea type="text" name="title" value={value.title} onChange={onChange} />

                    <label>Artist</label>
                    <input type="text" name="artist" value={value.artist} onChange={onChange} />

                    <label>Played</label>
                    <input type="text" name="played" value={value.played} onChange={onChange} />

                    <button>SAVE</button>
                </form>
            </div>
        </Cover>
    )
};

export default UpdateSong