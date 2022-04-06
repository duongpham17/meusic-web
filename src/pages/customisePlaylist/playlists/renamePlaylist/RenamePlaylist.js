import styles from './RenamePlaylist.module.scss';
import React from 'react';

import useForm from 'hooks/useForm';

import valiation from '../../utils/Validation';

const RenamePlaylist = (props) => {

    const {customisePlaylistUpdate, selectedPlaylist} = props;

    const initalState = {
        _id: selectedPlaylist._id,
        name: selectedPlaylist.name
    };

    const {values, onSubmit, onChange, errors, edited} = useForm(initalState, callback, valiation);

    async function callback(){
        if(!edited) return;
        await customisePlaylistUpdate(values);
    };

    const stopPropagation = (event) => event.stopPropagation();

    return (
        <form className={styles.container} onSubmit={onSubmit} onClick={stopPropagation} noValidate>
            <input type="text" placeholder="Playlist name" name="name" value={values.name} onChange={onChange} /> 
            {errors.name && <p>* {errors.name} *</p>}
            {edited && values.name.length >= 2 && <button>UPDATE</button>}
        </form>
    )
};

export default RenamePlaylist;