import styles from './Results.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import useOpen from 'hooks/useOpen';

import { MdOutlineLock, MdOutlineLockOpen } from 'react-icons/md';

const Results = (props)  => {

    const {searchRoom} = props.roomReducers;

    const {openValue, onOpenValue} = useOpen();

    const onPreviosUpdate = (data) => () => {
        const room = JSON.parse(localStorage.getItem("room-previous"));

        const noRooms = !room || !room.length;
        
        if(noRooms) return localStorage.setItem("room-previous", JSON.stringify([data]));

        const roomExist = room.some(el => el.room === data.room);

        if(roomExist) return;

        localStorage.setItem("room-previous", JSON.stringify([data, ...room]));
    };

    props = {
        ...props,
        openValue,
        onOpenValue
    };

    return ( searchRoom &&
        <div className={styles.container}>

            {searchRoom.map(el => 
                <div key={el._id} className={styles.element}>   
                    
                    <Link to={`/room/${el.room}`} onClick={onPreviosUpdate(el)}>  
                        {el.private ? "Private" : "Public" }
                    </Link>

                    <div className={styles.room}>
                        <p>{el.room}</p>
                        {el.private ? <MdOutlineLock className={styles.private}/> : <MdOutlineLockOpen className={styles.public}/> }
                    </div>

                </div>    
            )}
        </div>
    )
};

export default Results