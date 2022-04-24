import styles from './Delete.module.scss';
import React from 'react';
import Cover from 'components/cover';

const Delete = (props) => {
    const {element, roomDelete, onOpenValue} = props;

    return (
        <Cover onClose={() => onOpenValue("")}>
            <div className={styles.container}>
                
                <div>
                    <button onClick={() => onOpenValue("delete")}>Cancel</button>
                    <button onClick={() => roomDelete(element._id)}>Delete</button>
                </div>
            </div>
        </Cover>
    )
}

export default Delete