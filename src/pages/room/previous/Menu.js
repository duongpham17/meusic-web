import styles from './Menu.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {FaRegTrashAlt} from 'react-icons/fa';

const Menu = (props) => {

    const {element, index, onDelete} = props;

    return(
        <ul className={styles.container}>
            <li>           
                <Link to={`/room/${element.room}`}>
                    <span>Join</span>
                    <HiArrowNarrowRight/>
                </Link>
            </li>
            <li>
                <button onClick={onDelete(index)}>
                    <span>Remove</span>
                    <FaRegTrashAlt/>
                </button>
            </li>
        </ul>
    )
}

export default Menu