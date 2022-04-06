import React from 'react';

import { connect } from 'react-redux';
import { adminUpdateSongsKeys } from 'redux/actions/adminActions';

import UpdateSongsKeys from './UpdateSongsKeys';

const Update = (props) => (
    <>

        <UpdateSongsKeys {...props}/>

    </>
);

const mapDispatchToProps = { 
    adminUpdateSongsKeys
};

export default connect(null, mapDispatchToProps)(Update);