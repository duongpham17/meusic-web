import styles from './Admin.module.scss';
import React from 'react';

import Delete from './delete';
import Update from './update';

const Admin = () => {

    return (
        <div className={styles.container}>
            <h2>Admin</h2>

            <Delete/>

            <Update />

        </div>
    )
};

export default Admin