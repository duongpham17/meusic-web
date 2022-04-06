import styles from './Navbar.module.scss';
import React from 'react';

import Logo from './logo';
import Menu from './menu';
import Desktop from './desktop';
import Developer from './developer';

const Navbar = () => (
  <div className={styles.container}>

    <Logo/>

    <div className={styles.options}>

    <div className={`${styles.title} ${styles.desktop}`}>
        <Desktop/>
      </div>

      <div className={styles.title}>
        <Developer/>
      </div>

      <div className={styles.title}>
        <Menu />
      </div>

    </div>

  </div>
)

export default Navbar;
