import styles from './Logout.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { utilsOpenContent } from 'redux/actions/utilsActions';

import {AiOutlineCloudUpload} from 'react-icons/ai';

const Download = ({utilsOpenContent, onOpen}) => {

    const onClick = () => {
        onOpen();
        utilsOpenContent("upload");
    }

    return (
        <div className={styles.container}>
            <button onClick={onClick}>
                <span><AiOutlineCloudUpload/></span>
                <span>Upload</span>
            </button>
        </div>
    )
};

const mapDispatchToProps = {
    utilsOpenContent
  }

export default connect(null, mapDispatchToProps)(Download);
