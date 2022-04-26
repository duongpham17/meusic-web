import styles from './Users.module.scss';
import React from 'react';

const Users = (props) => {

    const {roomUsers, roomData} = props;

    return ( roomUsers.length >= 1 &&
        <section className={styles.container}>

            <header>
                <b> {roomData.room} </b>
                <b> {roomUsers.length} Online </b>
            </header>

            <div className={styles.map}>
                {roomUsers.map(el => 
                    <div key={el._id} className={styles.element}>
                        <p>{el.username}</p>
                    </div>    
                )}
            </div>
            
        </section>
    )
}

export default Users