import styles from './Authentication.module.scss';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authClearError} from 'redux/actions/authActions';
import {Link, Navigate} from 'react-router-dom';

const Authentication = (props) => {

    const {title, children} = props;

    const {isLoggedIn, error} = props.authReducers;

    useEffect(() => {
        return () => error && authClearError();
    }, [error]);

    if(isLoggedIn) return <Navigate to="/" />;
    
    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <b>{title}</b>

                {title === "Signup" 
                    ? <Link to="/login">Got account</Link>
                    : <Link to="/signup">Create</Link>
                }
            </div>

            {children}

        </div>
    )
}

const mapStateToProsp = state => ({
    authReducers: state.authReducers
});

const mapDispatchToProps = {
    authClearError
}

export default connect(mapStateToProsp, mapDispatchToProps)(Authentication);