import styles from './Alert.module.scss';
import React from 'react';
import {connect} from 'react-redux';

const Alert = ({alertsReducers}) =>

    <div className={styles.container}>
    {alertsReducers?.map(el => 
        <p key={el.id} className={`${styles.alert} ${styles[`alert-${el.alertType || "primary"}`]}`}>
            {el.message}
        </p>
    )}
    </div>

const mapStateToProps = state => ({
    alertsReducers: state.alertReducers
});

export default connect(mapStateToProps)(Alert)