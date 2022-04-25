import styles from './Uploading.module.scss';
import React from 'react';
import { generateid } from 'utils/generateid';

const Uploading = (props) => {

    const {uploading} = props.uploadReducers;

    return ( !!uploading.length &&
        <div className={styles.container}>
            <p>UPLOADING {uploading.length}</p>
            {uploading.map(el => 
                <div key={generateid()} className={styles.element}>
                    <p>{el}</p> 
                </div>
            )}
        </div>
    )
}

export default Uploading