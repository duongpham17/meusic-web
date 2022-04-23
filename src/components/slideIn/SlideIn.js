import styles from './SlideIn.module.scss';
import React from 'react';
import {HiArrowNarrowLeft} from 'react-icons/hi';

/**
 * @param { object } props - JSX component
 * @param { React } props.children - JSX that is wrapped around the content
 * @param { callback } props.onOpen - function that must change props.open to true and false 
 * @param { boolean } props.open - when the slide in should happen
 * @param { boolean } props.cover - styling the slide in with a background layer that is semi-transparent.
*/

export const SlideIn = ({children, open, onOpen, cover=true}) => {

    return (
        <div className={ styles.container} onClick={onOpen}>
            <div className={`${cover && open && styles.cover}`}>
                <div className={`${styles.slideIn} ${open && styles.open}`} onClick={(e) => e.stopPropagation()}>
                    
                    <button className={styles.closeBtn} onClick={onOpen}><HiArrowNarrowLeft/></button>

                    {children}

                </div>
            </div>
        </div>
    )
}

export default SlideIn