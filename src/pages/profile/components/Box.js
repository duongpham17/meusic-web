import styles from './Box.module.scss';
import React from 'react';
import {MdOutlineKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md';

export const Box = ({ title, children, open, onOpen, titleValue, editable=true }) => (
    <div className={styles.container}>
        {title && <label className={styles.title}>{title}</label>}
        <div className={styles.overview}>
            <span>{titleValue}</span>
            {editable && <button onClick={onOpen}>{!open ? <MdOutlineKeyboardArrowRight/> : <MdKeyboardArrowDown/>}</button>}
        </div>
        {children}
    </div>
)

export default Box