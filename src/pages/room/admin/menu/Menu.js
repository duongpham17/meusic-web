import styles from './Menu.module.scss';
import React from 'react';

import { MdOutlineLock, MdOutlineLockOpen, MdOutlineDeleteOutline} from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import useOpen from 'hooks/useOpen';

import Dropdown from 'components/dropdown';

import Private from './Private';
import Delete from './Delete';

const Menu = (props) => {

    const {element} = props;

    const {onOpenValue, openValue} = useOpen();

    props = {
        ...props,
        onOpenValue, 
        openValue
    };

    return (
        <div className={styles.container}>

            <Dropdown icon={<BsThreeDotsVertical className={styles.menu}/>}>
                <ul>
                    <li>
                        <button onClick={() => onOpenValue("private")}>
                            <span>{element.private ? <MdOutlineLock/> : <MdOutlineLockOpen />}</span>
                            <span>Private</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onOpenValue("delete")}>
                            <span><MdOutlineDeleteOutline/></span>
                            <span>Delete</span>
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