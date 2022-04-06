import styles from './Admin.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {BiCrown} from 'react-icons/bi';

const Admin = (props) => {

    const {user} = props;

    return ( user?.user?.role === "admin" &&
        <div className={styles.container}>
            <Link to='/admin'>
                <span><BiCrown/></span> 
                <span>Admin</span>
            </Link>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.userReducers
});

export default connect(mapStateToProps)(Admin);
