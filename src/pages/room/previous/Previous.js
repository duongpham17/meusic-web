import styles from './Previous.module.scss';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Previous = () => {

    const localStorageRoomPrevious = JSON.parse(localStorage.getItem("room-previous"));

    const [previousRooms, setPreviousRooms] = useState(localStorageRoomPrevious || []);

    const onDelete = (index) => () => {
        const newPreviousRooms = [...previousRooms];
        newPreviousRooms.splice(index, 1);
        localStorage.setItem("room-previous", JSON.stringify(newPreviousRooms));
        setPreviousRooms(newPreviousRooms);
    };

    return ( !!previousRooms.length &&
        <section className={styles.container}>

            <b>
                <span>Previous</span> 
                <span>{previousRooms.length} Room</span>
            </b>

            <div className={styles.map}>
                {previousRooms.map((el, i) => 
                    <div key={el._id} className={styles.element}>   

                        <Link to={`/room/${el.room}`}>:)</Link>

                        <div className={styles.room}>
                            <p>{el.room}</p>
                            <button onClick={onDelete(i)}><MdClose/></button>
                        </div>

                    </div>    
                )}
            </div>

        </section>
    )
}

export default Previous