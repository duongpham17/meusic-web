import React from 'react';
import {connect} from 'react-redux';
import Unknown from 'pages/unknown';

const Private = ({component: Component, auth:{isLoggedIn}, user:{user}, role=["user", "admin"]}) => {

  const localIsLoggedIn = localStorage.getItem("isLoggedIn")

  if (isLoggedIn && role.includes(user?.role)) {
    return <Component />
  } 
  
  if(!isLoggedIn && !localIsLoggedIn ) {
    return <Unknown />
  }
  
  return <div className='loading' />
}

const mapStateToProps = state => ({
  auth: state.authReducers,
  user: state.userReducers
})

export default connect(mapStateToProps)(Private)