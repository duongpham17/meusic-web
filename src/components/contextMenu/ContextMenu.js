import styles from './ContextMenu.module.scss';
import React, {useEffect, useState} from 'react';

/**
 * @param { object } props - JSX components
 * @param { React } props.children - JSX that is wrapped around the content
 * @param { React.FC } props.menu - functional compoment containing the context menu information
 * @param { string } props.id - unique id for element
 * @param { boolean } props.open - [0] useState
 * @param { callback } props.setOpen - [1] useState, toggle props.open true or false
*/

const ContextMenu = ({children, menu, id, open, setOpen}) => {

    const [position, setPosition] = useState({position: "", left: ""});

    const onContextMenu = (e) => {
        const {pageY, pageX} = e;
        e.preventDefault();
        const outsideScreen = (window.innerWidth - 135) <= pageX;
        setPosition({top: pageY, left: outsideScreen ? pageX - 135 : pageX});
        setOpen(id)
    };

    useEffect(() => {
        const handleClickOutside = () => setOpen("");
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
    }, [setOpen]);

    return (
        <div onContextMenu={onContextMenu}>
            
            {children}

            {open === id &&         
                <div className={styles.contextMenu} style={{top: `${position.top}px`, left: `${position.left}px`}}>
                    {menu}
                </div>
            }
        </div>
    )
}

export default ContextMenu