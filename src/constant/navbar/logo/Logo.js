import styles from './Logo.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

export const Logo = () =>
( 
  <div className={styles.container}>
    <Link to="/">
      <h3>Meusic</h3>
    </Link>
  </div>
)

export default Logo;
