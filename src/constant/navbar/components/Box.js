import styles from './Box.module.scss';
import React from 'react';
import {device} from 'utils/device';

/**
 * @param { string } desktop - only viewable on desktop
*/

const Box = ({button, desktop=false}) => {

  const isMobile = device();

  return (
    <div className={`${styles.container} ${desktop && isMobile && styles.desktop}`}>
        {button}
    </div>
  )
}

export default Box