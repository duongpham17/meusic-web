import styles from './Desktop.module.scss';
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { mac } from "./app";
import Dropdown from 'components/dropdown';
import Box from '../components/Box';

const Desktop = () => {
    return (
        <div className={styles.container}>            
            <Dropdown icon={<Box desktop button={<button>Desktop</button>}/>}>
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