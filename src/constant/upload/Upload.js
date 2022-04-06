import styles from './Upload.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { uploadSong, uploadOpen, uploadClearError } from 'redux/actions/uploadActions';

import SlideIn from 'components/slideIn';
import UploadSong from './UploadSong';
import Uploading from './Uploading';

export const Upload = (props) => {

    const {upload, uploadOpen} = props;
    
    return (

        <div className={styles.container}>

            <SlideIn open={upload.open} onOpen={uploadOpen}>

                <Uploading {...props} />

                <UploadSong {...props} />

            </SlideIn>

        </div>

    )
}

const mapStateToProps = state => ({
    upload: state.uploadReducers
})

const mapDispatchToProps = {
    uploadSong,
    uploadOpen,
    uploadClearError
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);