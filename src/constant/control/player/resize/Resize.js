import styles from './Resize.module.scss';
import React from 'react';

export const Resize = ({open, onOpen}) => 
(
  open && <div className={styles.container} onClick={onOpen} /> 
);

export default Resize;
