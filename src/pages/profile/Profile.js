import styles from './Profile.module.scss';
import React from 'react';
import {connect} from 'react-redux';

import Username from './username';

const Profile = ({User}) => {

    const {user} = User;

    const Boxed = ({ title, component:Component }) => (
        <div className={styles.boxed}>
            {title && <label className={styles.title}>{title}</label>}
            {Component}
        </div>
    )

    return ( 
        !User ? <div className='loading' /> :

        <div className={styles.container}>

            <Boxed title="Email" component={<p>{user.email}</p>} />

            <Boxed title="Username" component={<Username User={User}/>} />

        </div>
    )
}

const mapStateToProps = state => ({
    User: state.userReducers
})

export default connect(mapStateToProps)(Profile)