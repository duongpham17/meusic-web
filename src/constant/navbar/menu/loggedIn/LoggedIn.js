import styles from './LoggedIn.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { utilsOpenContent } from 'redux/actions/utilsActions';
import { authLogout } from 'redux/actions/authActions';

import {FiMenu} from 'react-icons/fi';

import useOpen from 'hooks/useOpen';
import SlideIn from 'components/slideIn';
import Box from '../../components/Box';

import Admin from './Admin';
import Upload from './Upload';
import LinkList from './LinkList';
import Logout from './Logout';

export const LoggedIn = (props) => {

    const { isLoggedIn } = props.authReducers; 

    const { open, onOpen } = useOpen();

    props = {
        ...props,
        open,
        onOpen,
    }
    
    return (
        <div className={styles.container}>

            <Box button={<button className={styles.menuBtn} onClick={onOpen}><FiMenu /></button>} />

            <SlideIn open={open} onOpen={onOpen} >

                <div className={styles.links}>

                    {isLoggedIn && <Admin {...props} /> }

                    <Upload {...props} />

                    {LinkList.map(el => 
                        <Link key={el.id} to={el.link} onClick={onOpen}>
                            <span>{el.icon}</span>
                            <span>{el.name}</span>
                        </Link>   
                    )}

                    <Logout {...props} />
                    
                </div>

            </SlideIn>

        </div>
    )
};

const mapStateToProps = state => ({
    authReducers: state.authReducers,
    userReducers: state.userReducers
});

const mapDispatchToProps = {
    utilsOpenContent,
    authLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
