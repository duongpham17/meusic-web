import styles from './Dropdown.module.scss';
import React from 'react';

import { MdMenu } from 'react-icons/md';

export const Dropdown = ({children, icon}) => {

    const stopPropagation = event => event.stopPropagation();

    return (
        <div className={styles.container} onClick={stopPropagation}>
                
            <div className={styles.menuBtn}>
                {icon 
                    ? icon
                    : <button><MdMenu/></button>
                }
            </div>

            <div className={styles.menu}>
                {children}
            </div>

        </div>
  )
}

export default Dropdown
