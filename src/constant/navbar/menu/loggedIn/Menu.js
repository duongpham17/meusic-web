import styles from './Menu.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import {FiMenu} from 'react-icons/fi';

import useOpen from 'hooks/useOpen';
import SlideIn from 'components/slideIn';

import Admin from './Admin';
import Upload from './Upload';
import LinkList from './LinkList';
import Logout from './Logout';

export const Menu = () => {

    const { open, onOpen } = useOpen();
    
    return (
        <div className={styles.container}>

            <button className={styles.menuBtn} onClick={onOpen}><FiMenu /></button>

            <SlideIn open={open} onOpen={onOpen} >

                <Admin />

                <Upload open={open} onOpen={onOpen}/>

                <div className={styles.links}>
                    {LinkList.map(el => 
                        <Link key={el.id} to={el.link} onClick={onOpen}>
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
