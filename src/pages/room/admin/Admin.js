import styles from './Admin.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import useApiGet from 'hooks/useApiGet';

import Menu from './menu/Menu';

const Admin = (props) => {

    const { roomGetCreateByMe} = props;

    const {admin} = props.roomReducers;

    useApiGet(roomGetCreateByMe, admin.length);

    return ( !!admin.length &&
        <section className={styles.container}>
            <b>
                <span>Admin</span> 
                <span>{admin.length} Room</span>
            </b>
            <div className={styles.map}>
                {admin.map(el => 
                    <div className={styles.element} key={el._id}>
                        <Link to={`/room/${el.room}`}> {el.room} </Link>
                        <Menu {...props} element={el} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Admin;