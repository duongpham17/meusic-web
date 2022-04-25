import {useEffect} from 'react';
import {connect} from 'react-redux';

import {authLoadUser, authLogout} from 'redux/actions/authActions';
import {savedPlaylistGetSongs} from 'redux/actions/savedPlaylistActions';

export const User = (props) => {

    const {authLoadUser, savedPlaylistGetSongs, authLogout} = props;

    const {isLoggedIn} = props.authReducers;

    useEffect(() => {
        if(isLoggedIn) return;
        const user = JSON.parse(localStorage.getItem("user"));
        if(!user) return;
        const isTokenExpired = Date.now() >= user.expires;
        if(isTokenExpired) return authLogout();

        authLoadUser();

        savedPlaylistGetSongs();

    }, [isLoggedIn, authLoadUser, authLogout, savedPlaylistGetSongs]);

    return null;
}

const mapStateToProps = state => ({
    authReducers: state.authReducers,
});

const mapDispatchToProps = {
    authLoadUser,
    savedPlaylistGetSongs,
    authLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(User)