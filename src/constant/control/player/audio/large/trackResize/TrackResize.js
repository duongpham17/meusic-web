import styles from './TrackResize.module.scss';
import React from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

const TrackResize = (props) => {

    const {onResize, position} = props;

    return (
        <div className={`${styles.container} ${position === "top" ? styles.top : styles.bottom}`}>
            <MdOutlineKeyboardArrowDown onClick={() => onResize("small")}/>
        </div>
    )
}

export default TrackResize