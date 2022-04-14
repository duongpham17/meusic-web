import styles from './Navbar.module.scss';
import React from 'react';

import { connect } from 'react-redux';

import Logo from './logo';
import Menu from './menu';
import Desktop from './desktop';
import Developer from './developer';

const Navbar = (props) => {

  const {theme: {theme}} = props;

  return (
    <div className={`${styles.container} ${theme?.type === "wallpaper" && styles.wallpaper}`}>
  
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

};

const mapStateToProps = state => ({
  theme: state.themeReducers
})

export default connect(mapStateToProps)(Navbar);
