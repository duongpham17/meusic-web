import styles from './Upload.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { uploadSong, uploadClearError } from 'redux/actions/uploadActions';
import { openContent } from 'redux/actions/openActions';
import SlideIn from 'components/slideIn';
import UploadSong from './UploadSong';
import Uploading from './Uploading';

export const Upload = (props) => {

    const {open, openContent} = props;

    const onOpen = () => openContent("upload");
    
    return (

        <div className={styles.container}>

            <SlideIn open={open.id === "upload"} onOpen={onOpen}>

                <Uploading {...props} />

                <UploadSong {...props} />

            </SlideIn>

        </div>

    )
}

const mapStateToProps = state => ({
    upload: state.uploadReducers,
    open: state.openReducers
})

const mapDispatchToProps = {
    uploadSong,
    uploadClearError,
    openContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);