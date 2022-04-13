import styles from './BigButton.module.scss';
import React from 'react';

export const BigButton = ({icon, description, onClick}) => 
(
    <div className={styles.container} onClick={onClick}>
        <ul>
            <li>{icon}</li>
            <li><span>{description}</span></li>
        </ul>
    </div>
)

export default BigButton