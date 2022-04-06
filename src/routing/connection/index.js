import styles from './Connection.module.scss';
import React, {useState, useEffect} from 'react';

export const Connection = () => {

    const [isOnline, setNetwork] = useState(window.navigator.onLine);

    const updateNetwork = () => {
       setNetwork(window.navigator.onLine);
    };

    useEffect(() => {
       window.addEventListener("offline", updateNetwork);
       window.addEventListener("online", updateNetwork);
       return () => {
            window.removeEventListener("offline", updateNetwork);
            window.removeEventListener("online", updateNetwork);
       };
    }, []);

    return (!isOnline && 
        <div className={styles.container}>
            <p>No internet connection. Please check your internet.</p>
        </div>
    )
}

export default Connection;