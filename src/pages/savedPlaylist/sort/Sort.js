import styles from './Sort.module.scss';
import React from 'react'

const Sort = (props) => {

    const {songsList, savedPlaylistGetSongs} = props;

    const query = localStorage.getItem("savedPlaylist-sort") || "artist";

    const onSort = (sort) => () => {
        if(query === sort) return;
        localStorage.setItem("savedPlaylist-sort", sort);
        savedPlaylistGetSongs(sort);
    };

    const classnameSort = (sort) => query === sort ? styles.selected : "";

    return ( !!songsList.length &&
        <div className={styles.container}>
            <div>
            <p><b>SONGS {songsList.length}</b></p>
            </div>
            <div>
                <button onClick={onSort("artist")} className={classnameSort("artist")}>A - Z</button>
                <button onClick={onSort("newest")} className={classnameSort("newest")}>Newest</button>
            </div>
        </div>
    );
}

export default Sort