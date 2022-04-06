import styles from './Download.module.scss';
import React from 'react';
import { connect } from 'react-redux';
import {downloadOptions} from 'redux/actions/downloadActions';
import { generateid } from 'utils/generateid';

const Download = ({download, downloadOptions}) => {
  return (
    <div className={styles.container}>
        {download?.map(el => 
        
            <div key={generateid()} className={styles.element} onClick={() => downloadOptions("end", el)}>
                <p>{el.slice(0, 40)}...</p>
                <div className="loading-15" />
            </div>
        
        )}
    </div>
  )
}

const mapStateToProps = state => ({
    download: state.downloadReducers
});

const mapDispatchToProps = {
    downloadOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)