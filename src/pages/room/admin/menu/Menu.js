import styles from './Menu.module.scss';
import React from 'react';

import { MdOutlineMenu, MdOutlineLock, MdOutlineLockOpen, MdOutlineDeleteOutline} from 'react-icons/md';

import useOpen from 'hooks/useOpen';

import Private from './Private';
import Delete from './Delete';

const Menu = (props) => {

    const {element} = props;

    const {onOpenValue, openValue} = useOpen();

    const Open = ({type, children}) => (
        openValue === type && 
        <div className={styles.open} onClick={() => onOpenValue(type)}>
            {children}
        </div>
    );

    props = {
        ...props,
        onOpenValue, 
        openValue
    }

    return (
        <div className={styles.container}>

            <button className={styles.menuBtn}><MdOutlineMenu/></button>

            <ul>
                <li>
                    <button onClick={() => onOpenValue("private")}>
                        {element.private ? <MdOutlineLock/> : <MdOutlineLockOpen />}
                        <span>Private</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => onOpenValue("delete")}>
                        <MdOutlineDeleteOutline/>
                        <span>Delete</span>
                    </button>
                </li>
            </ul>

            <Open type="delete">
                <Delete {...props} />
            </Open>

            <Open type="private">
                <Private {...props} />
            </Open>

        </div>
    )
}

export default Menu