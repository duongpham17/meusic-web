import styles from './Saved.module.scss';
import React, {useState} from 'react';

import Layout2 from 'components/informationLayout/Layout2';
import SearchBar from 'components/searchBar';

const Saved = (props) => {

    const {emitUpdateSong, params, setAlert, open} = props;    

    const {playlist} = props.savedPlaylistReducers;

    const initalPlaylist = playlist;
    
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
        setAlert(`${song.title.substring(0, 18)}... added`, "left");
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
                    <Layout2 song={el} index={index} />
                </div>
            )}

        </div>
    )
}

export default Saved