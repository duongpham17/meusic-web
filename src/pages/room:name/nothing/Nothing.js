import styles from './Nothing.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Nothing = () => {
  return (
    <div className={styles.container}>
        <Link to="/room">This room does not exist</Link>
    </div>
  )
}

export default Nothing