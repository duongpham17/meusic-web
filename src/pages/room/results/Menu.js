import styles from './Menu.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Menu = (props) => {

    const {element, onPreviosUpdate} = props;

    return(
        <ul className={styles.container}>
            <li>           
                <Link to={`/room/${element.room}`} onClick={() => onPreviosUpdate(element)}>
                    <span>Join</span>
                    <HiArrowNarrowRight/>
                </Link>
            </li>
        </ul>
    )
}

export default Menu