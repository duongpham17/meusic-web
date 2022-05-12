import styles from './Menu.module.scss';
import React from 'react';

import { MdOutlineLock, MdOutlineLockOpen} from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {FaRegTrashAlt} from 'react-icons/fa';

import useOpen from 'hooks/useOpen';

import Dropdown from 'components/dropdown';

import Private from './Private';
import Delete from './Delete';

const Menu = (props) => {

    const {element, dropdown} = props;

    const {onOpenValue, openValue} = useOpen();

    props = {
        ...props,
        onOpenValue, 
        openValue
    };

    return (
        <div className={styles.container} onClick={e => e.stopPropagation()}>

            <Dropdown icon={<BsThreeDotsVertical className={styles.menu}/>} dropdown={dropdown}>
                <ul>
                    <li>
                        <button onClick={() => onOpenValue("private")}>
                            <span>Private</span>
                           {element.private ? <MdOutlineLock/> : <MdOutlineLockOpen />}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onOpenValue("delete")}>
                            <span>Delete</span>
                            <FaRegTrashAlt/>
                        </button>
                    </li>
                </ul>
            </Dropdown>

            {openValue === "delete" && <Delete {...props}/> }

            {openValue === "private" && <Private {...props}/>}

        </div>
    )
}

export default Menu