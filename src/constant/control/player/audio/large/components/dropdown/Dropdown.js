import styles from './Dropdown.module.scss';
import React from 'react';

/**
 * @param { JSX } button - Element should have the html tag <button>{YOUR_ICON_SVG_IMAGE}<button>
 * @param { props } props.children - the drop down content, when button is hovered.
*/

const Dropdown = ({ button, children }) => {
  return (
    <div className={styles.container}>

      <div className={styles.button}>
        {button}
      </div>

      <div className={styles.content}>
        {children}
      </div>

    </div>
  )
}

export default Dropdown;