import React from 'react';
import {Link} from 'react-router-dom';
import Box from '../../components/Box';

const LoggedOut = () =>
(
  <div>
    <Box button={<Link to="/login">Login</Link>}/>
  </div>
)

export default LoggedOut;
