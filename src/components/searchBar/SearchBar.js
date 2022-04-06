import styles from './SearchBar.module.scss';
import React, {useEffect} from 'react';
import {MdClear, MdSearch} from 'react-icons/md';

/**
 * @param { object } props - JSX components
 * @param { string } props.placeholder - search field initial text / message to users
 * @param { string } props.value - for search field / input field
 * @param { boolean } props.loading - if search is based on getting data from database this will load a spinner
 * @param { callback } props.onChange -  returns the target value from input field
 * @param { callback } props.onClear - clear search field
*/

export const SearchBar = ({placeholder="Search", value, loading, onChange, onClear}) => {

    useEffect(() => {
        if(value.length <= 1) return;

        const keypress = window.addEventListener("keypress", (event) => {
            const [ctrl, key] = [event.ctrlKey, event.key];
            if(ctrl && key === "c") onClear();
        });

        return () => window.removeEventListener("keypress", keypress)
    }, [onClear, value])

    return (
        <div className={styles.container}>
            <MdSearch className={styles.searchIcon}/>
            <input type="text" placeholder={placeholder || ""} value={value} onChange={onChange} />
            {loading && <div className="loading-20"/>}
            {value.length >= 1 && <button className={styles.clearBtn} onClick={onClear}><MdClear/></button>}

            <div className={styles.shortcut}>
                <small>Press <kbd>Ctrl</kbd> + <kbd>C</kbd></small>
            </div>
        </div>
    );
};


export default SearchBar