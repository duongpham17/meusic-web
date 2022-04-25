import styles from './Profile.module.scss';
import React from 'react';
import {connect} from 'react-redux';

import Username from './username';

const Profile = (props) => {

    const {user} = props.userReducers;

    const Boxed = ({ title, component:Component }) => (
        <div className={styles.boxed}>
            {title && <label className={styles.title}>{title}</label>}
            {Component}
        </div>
    )

    return ( 
        !user ? <div className='loading' /> :

        <div className={styles.container}>

            <Boxed title="Email" component={<p>{user.email}</p>} />

            <Boxed title="Username" component={<Username {...props}/>} />

        </div>
    )
}

const mapStateToProps = state => ({
    userReducers: state.userReducers
})

export default connect(mapStateToProps)(Profile)