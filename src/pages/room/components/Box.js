import styles from './Box.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Box = ({icon, link, text, button}) => {

    return (
        <div className={styles.container}>
            <div className={styles.link} >
                <Link to={`/room/${link}`}>{icon}</Link>
            </div>

            <div className={styles.bottom}>
                <span>{text}</span>
                <div className={styles.btn}>{button}</div>
            </div>
        </div>
    )
}

export default Box