import styles from './Profile.module.scss';
import React from 'react';

import {connect} from 'react-redux';
import {userRequestEmailChange, userEmailConfirm} from 'redux/actions/userActions';

import Email from './email';
import Username from './username';

const Profile = (props) => {

    const {user} = props.userReducers;

    return ( 
        !user ? <div className='loading' /> :

        <div className={styles.container}>

            <Email {...props} />

            <Username {...props} />

        </div>
    )
}

const mapStateToProps = state => ({
    userReducers: state.userReducers
});

const mapDispatchToProps = {
    userRequestEmailChange,
    userEmailConfirm
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)