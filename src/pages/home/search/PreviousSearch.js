import styles from './PreviousSearch.module.scss';
import React from 'react';
import {MdClose} from 'react-icons/md';

const PreviousSearch = (props) => {
    
    const {previousSearch, onSet, onPreviousSearchValue} = props;

    return ( !![...previousSearch].length &&
        <div className={styles.container}>
            
            <button onClick={() => onSet("clear")}> Clear </button>

            {[...previousSearch].map(el => 
                <button key={el}>
                    <span onClick={() => onPreviousSearchValue("title", el)}>{el}</span>
                    <span onClick={() => onSet("delete", el)}><MdClose/></span>
                </button>
            )}
        </div>
    )
}

export default PreviousSearch