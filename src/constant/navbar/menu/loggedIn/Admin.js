import React from 'react';
import {Link} from 'react-router-dom';
import {BiCrown} from 'react-icons/bi';

const Admin = (props) => {

    const {user} = props.userReducers;

    return ( user?.role === "admin" &&
        <div>
            <Link to='/admin'>
                <span><BiCrown/></span> 
                <span>Admin</span>
            </Link>
        </div>
    );
};

export default Admin;
