import styles from './Find.module.scss';
import React from 'react';

import InformationLayout2 from 'components/informationLayout/Layout2';
import SearchBar from 'components/searchBar';
import useDelayFetch from 'hooks/useDelayFetch';

const Find = (props) => {

    const {roomSearchSong, emitUpdateSong, params, setAlert} = props;

    const {room} = props.roomReducers;

    const {value, onChange, onClear, loading} = useDelayFetch(roomSearchSong);

    const onAdd = (song) => () => {
        const data = {
            type: "add",
            room: params.room,
            song,
        };
        emitUpdateSong(data);
        setAlert(`${song.title.substring(0, 18)}... added`);
    }

    return (
        <div className={styles.container}>

            <SearchBar placeholder="Search songs" value={value} onChange={onChange} onClear={onClear} loading={loading} />

            { !!room.searchSong &&
                <>
                    <div className={styles.total}>
                        <b>Total</b>
                        <b>{room.searchSong.length}</b>
                    </div>

                    <div className={styles.map}>
                        {room.searchSong.map((el, index) => 
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

export default Find