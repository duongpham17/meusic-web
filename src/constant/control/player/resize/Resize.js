import styles from './Resize.module.scss';
import React from 'react';

export const Resize = ({resize, onResize}) => 
(
  resize === "close" && <div className={styles.container} onClick={() => onResize("small")} /> 
);

export default Resize;
