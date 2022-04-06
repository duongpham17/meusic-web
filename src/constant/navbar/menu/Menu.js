import React from 'react';
import {connect} from 'react-redux';

import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut'

export const Menu = ({auth}) => {

  const {isLoggedIn} = auth;

  return ( 
    <>

      {isLoggedIn && <LoggedIn/>}

      {!isLoggedIn && <LoggedOut />}

    </>
  )
};

const mapStateToProps = state => ({
  auth: state.authReducers
})

export default connect(mapStateToProps)(Menu);
