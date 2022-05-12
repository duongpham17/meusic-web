import styles from './Title.module.scss';
import React from 'react'

export const Title = ({left, right}) => {
  return (
    <div className={styles.container}>
        <b>
            <span>{left}</span> 
            <span>{right}</span>
        </b>
    </div>
  )
}

export default Title