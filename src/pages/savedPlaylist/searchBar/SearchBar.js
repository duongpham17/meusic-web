import styles from './SearchBar.module.scss';
import React, {useState} from 'react';

import SearchBar from 'components/searchBar';

export const Search = (props) => {

    const {setSongsList, savedPlaylist} = props;

    const [value, setValue] = useState("");

    const initalSongList = savedPlaylist.playlist;

    const onChange = (event) => {
        const {value} = event.target;
        setValue(value);
        if(!value) return setSongsList(initalSongList);
        const filtered = initalSongList.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));
        setSongsList(filtered);
    };

    const onClear = () => {
        setValue("");
        setSongsList(initalSongList);
    };

    return (
        <div className={styles.container}>
            <SearchBar value={value} onChange={onChange} onClear={onClear} placeholder="Search saved songs" />
        </div>
    )
}

export default Search