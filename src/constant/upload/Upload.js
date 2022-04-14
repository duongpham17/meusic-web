import styles from './Upload.module.scss';
import React from 'react';

import { connect } from 'react-redux';
import { uploadSong, uploadClearError } from 'redux/actions/uploadActions';
import { utilsOpenContent } from 'redux/actions/utilsActions';
import SlideIn from 'components/slideIn';
import UploadSong from './UploadSong';
import Uploading from './Uploading';

export const Upload = (props) => {

    const {utils, utilsOpenContent} = props;

    const onOpen = () => utilsOpenContent("upload");
    
    return (

        <div className={styles.container}>

            <SlideIn open={utils.open === "upload"} onOpen={onOpen}>

                <Uploading {...props} />

                <UploadSong {...props} />

            </SlideIn>

        </div>

    )
}

const mapStateToProps = state => ({
    upload: state.uploadReducers,
    utils: state.utilsReducers
})

const mapDispatchToProps = {
    uploadSong,
    uploadClearError,
    utilsOpenContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);