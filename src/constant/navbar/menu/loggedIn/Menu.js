import styles from './Menu.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import {AiOutlineMenu} from 'react-icons/ai';

import useOpen from 'hooks/useOpen';
import SlideIn from 'components/slideIn';

import Admin from './Admin';
import LinkList from './LinkList';
import Logout from './Logout';

export const Menu = () => {

    const { open, onOpen } = useOpen();
    
    return (
        <div className={styles.container}>

            <button className={styles.menuBtn} onClick={onOpen}><AiOutlineMenu /></button>

            <SlideIn open={open} onOpen={onOpen}>

                <Admin />

                <div className={styles.links}>
                    {LinkList.map(el => 
                        <Link key={el.id} to={el.link}>
                            <span>{el.icon}</span>
                            <span>{el.name}</span>
                        </Link>   
                    )}
                </div>

                <Logout />

            </SlideIn>


        </div>
    )
}

export default Menu;
