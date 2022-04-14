import styles from './Admin.module.scss';
import React from 'react';
import useApiGet from 'hooks/useApiGet';

import Menu from './menu/Menu';

const Admin = (props) => {

    const {room, roomGetCreateByMe} = props;

    useApiGet(roomGetCreateByMe, room.admin.length);

    return ( !!room.admin.length &&
        <section className={styles.container}>
            <b>
                <span>Admin</span> 
                <span>{room.admin.length} Room</span>
            </b>
            <div className={styles.map}>
                {room.admin.map(el => 
                    <div className={styles.element} key={el._id}>
                        <a href={`/room/${el.room}`}> {el.room}</a>
                        <Menu {...props} element={el} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Admin;