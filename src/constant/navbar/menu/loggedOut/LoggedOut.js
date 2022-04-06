import React from 'react';
import {Link} from 'react-router-dom';

const LoggedOut = () =>
(
  <div>
    <Link to="/login">Login</Link>
  </div>
)

export default LoggedOut;
