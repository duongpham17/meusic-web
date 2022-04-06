import styles from './Results.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import useOpen from 'hooks/useOpen';

import { MdOutlineLock, MdOutlineLockOpen } from 'react-icons/md';

const Results = (props)  => {

    const {room} = props;

    const {openValue, onOpenValue} = useOpen();

    const onPreviosUpdate = (data) => () => {
        const room = JSON.parse(localStorage.getItem("room-previous"));
        
        if(!room || !room.length) return localStorage.setItem("room-previous", JSON.stringify([data]));

        const roomExist = room.some(el => el.room === data.room);

        if(roomExist) return;

        localStorage.setItem("room-previous", JSON.stringify([data, ...room]));
    };

    props = {
        ...props,
        openValue,
        onOpenValue
    };

    return ( room.searchRoom &&
        <div className={styles.container}>

            {room.searchRoom.map(el => 
                <div key={el._id} className={styles.element}>   
                    
                    <div className={styles.privateRoom} data-private={el.private ? "Private" : "Public"}>
                        {el.private ? <MdOutlineLock className={styles.private}/> : <MdOutlineLockOpen className={styles.public}/> }
                    </div>

                    <Link to={`/room/${el.room}`} target="_blank" onClick={onPreviosUpdate(el)}>
                        {el.room}
                    </Link>

                </div>    
            )}
        </div>
    )
};

export default Results