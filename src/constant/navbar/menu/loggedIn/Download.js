import styles from './Logout.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { utilsOpenContent } from 'redux/actions/utilsActions';

import {BsDownload} from 'react-icons/bs';

const Download = ({utilsOpenContent, onOpen}) => {

    const onClick = () => {
        onOpen();
        utilsOpenContent("upload");
    }

    return (
        <div className={styles.container}>
            <button onClick={onClick}>
                <span><BsDownload/></span>
                <span>Download</span>
            </button>
        </div>
    )
};

const mapDispatchToProps = {
    utilsOpenContent
  }

export default connect(null, mapDispatchToProps)(Download);
