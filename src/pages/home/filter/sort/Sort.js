import styles from './Sort.module.scss';
import React, {useEffect} from 'react';

import {MdKeyboardArrowUp} from 'react-icons/md'

import useQuery from 'hooks/useQuery';

import {sortQuery, limitQuery} from './QueryList';

export const Sort = (props) => {

    const {previewGetSongs, onOpen, open} = props;

    const {setQuery, existQuery, getQueryValue, clearQuery, navigate} = useQuery();

    const onSort = (params, value) => () => {
        if(existQuery(params, value)) return;
        const query = setQuery(params, value);
        previewGetSongs();
        localStorage.setItem("filtered", query);
    };

    const onClear = () => {
        previewGetSongs();
        clearQuery();
        localStorage.removeItem("filtered");
    };

    useEffect(() => {
        const query = localStorage.getItem("filtered");
        if(query) navigate(query);
    }, [navigate]);

    return ( open && 
        <div className={styles.container}>

            <p>
                <b>Sort</b> 
                <span>
                    {localStorage.getItem("filtered") && <button onClick={onClear}>Clear</button>}
                    <button onClick={onOpen}><MdKeyboardArrowUp/></button>
                </span>
            </p>

            {sortQuery.map(el => 
                <button key={el.id} className={`${styles.queryBtn} ${getQueryValue("sort") === el.query && styles.selected}`} onClick={onSort("sort", el.query)}>
                    {el.name}
                </button>
            )}  

            <p>
                <b>Limit</b>
            </p>

            {limitQuery.map(el => 
                <button key={el} className={`${styles.queryBtn} ${Number(getQueryValue("limit")) === el && styles.selected}`} onClick={onSort("limit", el)}>
                    {el}
                </button>
            )}  

        </div>
    )
};

export default Sort