import React from 'react';
import {connect} from 'react-redux';

import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut'

export const Menu = (props) => {

  const {isLoggedIn} = props.authReducers;

  return ( 
    <>

      {isLoggedIn && <LoggedIn />}

      {!isLoggedIn && <LoggedOut />}

    </>
  )
};

const mapStateToProps = state => ({
  authReducers: state.authReducers,
});

export default connect(mapStateToProps)(Menu);
