import styles from './Unknown.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

export const Index = () => {
    return (
        <div className={styles.container}>
            <Link to="/">
                <p>404</p>
                <br/>
                <p>UNKNOWN ROUTE</p>
            </Link>
        </div>
    )
}

export default Index
