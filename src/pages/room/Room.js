import styles from './Room.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { roomSearchRoom, roomGetCreateByMe, roomCreate, roomDelete, roomPrivateUpdate} from 'redux/actions/roomActions';

import Search from './search';
import Create from './create';
import Results from './results';
import Admin from './admin';
import Previous from './previous';

const Room = (props) => {

    return (
        <div className={styles.container}>
            <Search {...props} />

            <div className={`${styles.searching}`}>
                <Create {...props} />
                <Results {...props} />
            </div>

            <Previous {...props} />

            <Admin  {...props} />
        </div>
    )
};

const mapStateToProps = state => ({
    room: state.roomReducers
});

const mapDispatchToProps = {
    roomGetCreateByMe,
    roomSearchRoom,
    roomCreate,
    roomDelete,
    roomPrivateUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Room);