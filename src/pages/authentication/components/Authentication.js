import styles from './Authentication.module.scss';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authClearError} from 'redux/actions/authActions';
import {Link, Navigate, useLocation} from 'react-router-dom';

const Authentication = ({title, children, auth, authClearError}) => {

    const location = useLocation();

    const {isLoggedIn} = auth;

    useEffect(() => {
        return () => auth.error && authClearError();
    }, [authClearError, auth.error]);

    if(isLoggedIn) return <Navigate to="/" />;

    const TitleLinks = ({link, description}) => (
        <div>
            <Link to={`/${link}`}>{description}</Link>
        </div> 
    )
    
    return (
        <div className={styles.container}>
            
            <div className={styles.authentication}>
                <h2>{title}</h2>
                {children}
            </div>

            <div className={styles.links}>
                {location.pathname.includes("signup") 
                    ? <TitleLinks link="login" description="Already registered" /> 
                    : <TitleLinks link="signup" description="Create account" />
                }
            </div>

        </div>
    )
}

const mapStateToProsp = state => ({
    auth: state.authReducers
});

const mapDispatchToProps = {
    authClearError
}

export default connect(mapStateToProsp, mapDispatchToProps)(Authentication);