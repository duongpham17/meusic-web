import styles from './Search.module.scss';
import React from 'react';

import InformationLayout2 from 'components/informationLayout/Layout2';
import SearchBar from 'components/searchBar';
import useDelayFetch from 'hooks/useDelayFetch';

const Search = (props) => {

    const {roomSearchSong, emitUpdateSong, params, setAlert} = props;

    const {searchSong} = props.roomReducers;

    const {value, onChange, onClear, loading} = useDelayFetch(roomSearchSong);

    const onAdd = (song) => () => {
        const data = {
            type: "add",
            room: params.room,
            song,
        };
        emitUpdateSong(data);
        setAlert(`${song.title.substring(0, 18)}... added`, "left");
    };

    return (
        <div className={styles.container}>

            <div className={styles.search}>
                <SearchBar placeholder="Search songs" value={value} onChange={onChange} onClear={onClear} loading={loading} />
            </div>

            { searchSong &&
                <>
                    <div className={styles.total}>
                        <b>SONGS</b>
                        <b>{searchSong.length}</b>
                    </div>

                    <div className={styles.map}>
                        {searchSong.map((el, index) => 
                            <div className={styles.element} key={el._id} onClick={onAdd(el)}>
                                <InformationLayout2 song={el} index={index} />
                            </div>
                        )}
                    </div>
                </>
            }

        </div>
    )
}

export default Search