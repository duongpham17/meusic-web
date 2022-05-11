import styles from './Profile.module.scss';
import React from 'react';

import {connect} from 'react-redux';
import {userRequestEmailChange, userEmailConfirm, userUpdateCryptoAddress, userRemoveCryptoAddress} from 'redux/actions/userActions';

import Email from './email';
import Username from './username';
import CryptoWallet from './cryptoWallet';

const Profile = (props) => {

    const {user} = props.userReducers;

    return ( 
        !user ? <div className='loading' /> :

        <div className={styles.container}>

            <Email {...props} />

            <Username {...props} />

            <CryptoWallet {...props} />

        </div>
    )
}

const mapStateToProps = state => ({
    userReducers: state.userReducers
});

const mapDispatchToProps = {
    userRequestEmailChange,
    userEmailConfirm,
    userUpdateCryptoAddress,
    userRemoveCryptoAddress,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)