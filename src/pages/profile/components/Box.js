import styles from './Box.module.scss';
import React from 'react';
import {MdEdit, MdClose} from 'react-icons/md';

export const Box = ({ title, children, open, onOpen, titleValue }) => (
    <div className={styles.container}>
        {title && <label className={styles.title}>{title}</label>}
        <div className={styles.overview}>
            <span>{titleValue}</span>
            <button onClick={onOpen}>{!open ? <MdEdit/> : <MdClose/>}</button>
        </div>
        {children}
    </div>
)

export default Box