import styles from './Navbar.module.scss';
import React from 'react';

import { connect } from 'react-redux';

import Logo from './logo';
import Menu from './menu';
import Connect from './connect';
import Desktop from './desktop';
import Developer from './developer';

const Navbar = (props) => {

  const {theme} = props.utilsReducers;

  return (
    <div className={`${styles.container} ${theme.theme?.type === "wallpaper" && styles.wallpaper}`}>
  
      <Logo/>
  
      <div className={styles.options}>
  
          <Desktop/>

          <Developer/>

          <Connect/>

          <Menu />
          
      </div>
  
    </div>
  )

};

const mapStateToProps = state => ({
  utilsReducers: state.utilsReducers
})

export default connect(mapStateToProps)(Navbar);
