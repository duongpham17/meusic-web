import styles from './Download.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import {utilsDownloadOptions} from 'redux/actions/utilsActions';
import { generateid } from 'utils/generateid';

const Download = (props) => {

    const {utilsDownloadOptions} = props;

    const {download} = props.utilsReducers;

    return (
        <div className={styles.container}>
            {download.map(el => 
            
                <div key={generateid()} className={styles.element} onClick={() => utilsDownloadOptions("end", el)}>
                    <p>{el.slice(0, 40)}...</p>
                    <div className="loading-15" />
                </div>
            
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    utilsReducers: state.utilsReducers
});

const mapDispatchToProps = {
    utilsDownloadOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)