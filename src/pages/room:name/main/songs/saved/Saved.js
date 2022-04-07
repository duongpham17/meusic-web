import styles from './Saved.module.scss';
import React, {useState} from 'react';

import Layout3 from 'components/informationLayout/Layout3';
import SearchBar from 'components/searchBar';

const Saved = (props) => {

    const {savedPlaylist, emitUpdateSong, params, setAlert, open} = props;    
    const initalPlaylist = savedPlaylist.playlist;
    const [userSongs, setUserSongs] = useState(initalPlaylist || []);
    const [value, setValue] = useState("");

    const onChange = (e) => {
        const {value} = e.target;
        setValue(value);
        if(!value) return setUserSongs(initalPlaylist);
        const filtered = initalPlaylist.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));
        setUserSongs(filtered);
    };

    const onClear = () => {
        setValue("");
        setUserSongs(initalPlaylist);
    };

    const onAdd = (song) => () => {
        const data = {
            type: "add",
            room: params.room,
            song,
        };
        emitUpdateSong(data);
        setAlert(`${song.title.substring(0, 18)}... added`);
    };

    return (
        <div className={styles.container}>

            <SearchBar value={value} onChange={onChange} onClear={onClear}/>

            <div className={styles.total}>
                <b>Total</b>
                <b>{userSongs.length}</b>
            </div>

            {open ==="saved" && userSongs.map((el, index) => 
                <div className={styles.element} key={el._id} onClick={onAdd(el)}>
                    <Layout3 song={el} index={index} />
                </div>
            )}

        </div>
    )
}

export default Saved