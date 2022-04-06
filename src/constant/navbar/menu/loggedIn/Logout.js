import styles from './Logout.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { authLogout } from 'redux/actions/authActions';

import {BiLogOut} from 'react-icons/bi';

const Logout = ({authLogout}) => (
    <div className={styles.container}>
        <button onClick={authLogout}>
            <span><BiLogOut/></span> 
            <span>Logout</span>
        </button>
    </div>
);

const mapDispatchToProps = {
    authLogout
}

export default connect(null, mapDispatchToProps)(Logout);
