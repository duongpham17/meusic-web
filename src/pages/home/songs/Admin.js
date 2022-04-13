import styles from './Admin.module.scss';
import React, {useState, useEffect} from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';

export const Admin = (props) => {

    const {user, adminDeleteSong, song} = props;

    const [loading, setLoading] = useState(false);

    const onDelete = async () => {
        setLoading(true);
        await adminDeleteSong(song._id);
        setLoading(false);
    };

    useEffect(() => {
        return () => setLoading(false);   
    }, [])

    return ( !user.user ? "" : user.user.role === "admin" && 
        <div className={styles.container} onClick={onDelete}>
            {!loading && <button><FaRegTrashAlt /></button>}
            {loading && <div className='loading-15'/>}
        </div>
    )
}

export default Admin