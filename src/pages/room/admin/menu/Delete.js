import styles from './Delete.module.scss';
import React from 'react'

const Delete = (props) => {
    const {element, roomDelete, onOpenValue} = props;

    return (
        <div className={styles.container}>
            <button onClick={() => onOpenValue("delete")}>Cancel</button>
            <button onClick={() => roomDelete(element._id)}>Delete</button>
        </div>
    )
}

export default Delete