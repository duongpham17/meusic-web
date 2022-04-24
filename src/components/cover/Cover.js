import styles from './Cover.module.scss';
import React from 'react'

const Cover = ({children, onClose}) => {
  return (
    <div className={styles.container} onClick={onClose}>
        {children}
    </div>
  )
}

export default Cover