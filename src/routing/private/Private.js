import React from 'react';
import {connect} from 'react-redux';
import Unknown from 'pages/unknown';

const Private = (props) => {

  const {component: Component, roles=["user", "admin"]} = props;

  const {isLoggedIn} = props.authReducers;

  const {user} = props.userReducers;

  const localIsLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn && roles.includes(user?.role)) return <Component />
  
  if(!isLoggedIn && !localIsLoggedIn ) return <Unknown />
  
  return <div className='loading' />
}

const mapStateToProps = state => ({
  authReducers: state.authReducers,
  userReducers: state.userReducers
})

export default connect(mapStateToProps)(Private)