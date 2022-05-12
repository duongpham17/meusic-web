import styles from './Dropdown.module.scss';
import React from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

export const Dropdown = ({children, icon, dropdown=true}) => {

    return (
        <div className={styles.container}>
                
            {
                dropdown &&<div className={styles.menuBtn} tabIndex="0">
                    {icon 
                        ? icon
                        : <button><BsThreeDotsVertical/></button>
                    }
                </div>
            }

            <div className={`${styles.menu} ${!dropdown && styles.show}`}>
                {children}
            </div>

        </div>
  )
}

export default Dropdown
