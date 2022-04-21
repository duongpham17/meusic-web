import styles from './TrackResize.module.scss';
import React from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

const TrackResize = (props) => {

    const {onResize} = props;

    return (
        <div className={styles.container}>
            <MdOutlineKeyboardArrowDown onClick={() => onResize("small")}/>
        </div>
    )
}

export default TrackResize