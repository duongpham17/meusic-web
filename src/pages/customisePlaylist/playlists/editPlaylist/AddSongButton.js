import styles from './AddSongButton.module.scss';
import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';

const AddButton = (props) => {

    const {onOpen} = props;

    return (
        <div className={styles.container}>
            <button onClick={onOpen}>
                <span>SAVED SONGS</span>
                <MdKeyboardArrowRight/>
            </button>
        </div>
    )
}

export default AddButton