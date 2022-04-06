import styles from './Authentication.module.scss';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {authClearError} from 'redux/actions/authActions';
import {Link, Navigate, useLocation} from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';

const Authentication = ({children, auth, authClearError}) => {

    const location = useLocation();

    const {isLoggedIn} = auth;

    useEffect(() => {
        return () => auth.error && authClearError();
    }, [authClearError, auth.error]);

    if(isLoggedIn) return <Navigate to="/" />;

    const TitleLinks = ({title, link, description}) => (
        <div>
            <h2>{title}</h2>
            <Link to={`/${link}`}> <MdKeyboardArrowRight/> <span>{description}</span></Link>
        </div> 
    )
    
    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {location.pathname.includes("signup") 
                    ? <TitleLinks title="Signup" link="login" description="Already registered" /> 
                    : <TitleLinks title="Login" link="signup" description="Create account" />
                }
            </div>
            
            <div className={styles.authentication}>
                {children}
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