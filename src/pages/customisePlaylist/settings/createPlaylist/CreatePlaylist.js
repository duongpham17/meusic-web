import styles from './CreatePlaylist.module.scss';
import React from 'react';

import {AiOutlinePlus} from 'react-icons/ai';

import useForm from 'hooks/useForm';
import useOpen from 'hooks/useOpen';

import valiation from '../../utils/Validation';
import BigButton from '../component/BigButton';

const CreatePlaylist = (props) => {

    const {customisePlaylistCreate} = props;

    const {open, onOpen} = useOpen();

    const initalState = {
        name: ""
    }
    
    const {values, onSubmit, onChange, errors} = useForm(initalState, callback, valiation, true);

    async function callback(){
        await customisePlaylistCreate(values);
        onOpen();
    }

    const stopPropagation = event => event.stopPropagation();

    return (
        <div className={styles.container}>

            <BigButton description="Create" onClick={onOpen} icon={<AiOutlinePlus />} />

            {open &&
                <div className={styles.cover} onClick={onOpen}>
                    <form onSubmit={onSubmit} onClick={stopPropagation}>
                        <input type="text" placeholder="Playlist name" name="name" value={values.name} onChange={onChange} /> 
                        <button>CREATE</button>
                        {errors.name && <p>* {errors.name} *</p>}
                    </form>
                </div>
            }
        </div>
    )
};

export default CreatePlaylist;
