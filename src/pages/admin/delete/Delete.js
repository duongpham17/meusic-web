import React from 'react';

import { connect } from 'react-redux';
import { adminDeleteAllFromStorage } from 'redux/actions/adminActions';

import DeleteSongsFromStorage from './DeleteSongsFromStorage';

const Delete = (props) => (
    <>
        <DeleteSongsFromStorage {...props}/>
    </>
)

const mapDispatchToProps = { 
    adminDeleteAllFromStorage,
}

export default connect(null, mapDispatchToProps)(Delete)