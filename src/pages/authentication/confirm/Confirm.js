import styles from './Confirm.module.scss';
import React, {useEffect, useState} from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { authConfirmEmail } from 'redux/actions/authActions';
import { connect } from 'react-redux';

export const Confirm = (props) => {

    const {auth, authConfirmEmail} = props;

    const {isLoggedIn, error} = auth;

    const {code} = useParams();
    
    const [expiredLink, setExpiredLink] = useState(false);

    useEffect(() => {
        authConfirmEmail(code);
    }, [authConfirmEmail, code]);

    useEffect(() => {
        if(error.confirm) setExpiredLink(true);
    }, [error, setExpiredLink]);

    if(isLoggedIn) return <Navigate replace to="/" />

    return (
        <div className={styles.container}>

            { !expiredLink &&
                <div className={styles.confirmation}>
                    <div className={styles.loading} />
                    <p>Checking</p>
                </div>
            }

            { expiredLink && 
                <div className={styles.resend}>
                    <Link to="/login">Confirmation token expired. Get another.</Link>
                </div>
            }

        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducers
});

const mapDispatchToProps = {
    authConfirmEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
