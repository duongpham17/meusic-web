import React from 'react';
import {BiLogOut} from 'react-icons/bi';

const Logout = ({authLogout}) => (
    <div>
        <button onClick={authLogout}>
            <span><BiLogOut/></span> 
            <span>Logout</span>
        </button>
    </div>
);

export default Logout
