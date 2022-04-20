import styles from './Desktop.module.scss';
import React from 'react';

import { AiFillApple } from 'react-icons/ai';

import Dropdown from 'components/dropdown';

import { mac } from "./app";

const Desktop = () => {

    return (
        <div className={styles.container}>
            <Dropdown icon={<button className={styles.button}>Desktop</button>}>
                <ul>
                    <li> 
                        <a href={mac} target="_blank" rel="noreferrer" download="name.zip">
                            <AiFillApple/> 
                            <span>Mac</span>
                        </a>
                    </li>
                </ul>
            </Dropdown>
        </div>
    )
};

export default Desktop