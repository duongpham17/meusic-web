import styles from './Alert.module.scss';
import React from 'react';
import {connect} from 'react-redux';
import {removeAlert} from 'redux/actions/alertActions';

const Alert = ({alertsReducers, removeAlert}) => (
    <div className={styles.container}>
        {alertsReducers?.map(el => 
            <div className={`${styles.alert} ${el.side === "left" ? styles.left : styles.right}`} key={el.id}>
                <p className={styles.element} onClick={() => removeAlert(el.id)}>
                    {el.message}
                </p>
            </div>
        )}
    </div>
)

const mapStateToProps = state => ({
    alertsReducers: state.alertReducers
});

const mapDispatchToProps = {
    removeAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert)