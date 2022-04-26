import styles from './Playlist.module.scss';
import React from 'react';
import { generateid } from 'utils/generateid';
import { MinSec } from 'utils/time';
import { FaRegTrashAlt } from 'react-icons/fa';

const Playlist = (props) => {

    const {roomData, roomPlaying, emitChangeSong, emitUpdateSong, setAlert} = props;

    const {user} = props.userReducers;

    const onPlay = (index) => () => {
        const data = {
            room: roomData.room,
            index,
        }
        emitChangeSong(data);
    };

    const onDelete = (index, song) => (e) => {
        e.stopPropagation();
        const data = {
            type: "remove",
            room: roomData.room,
            index,
        };
        emitUpdateSong(data);
        setAlert(`${song.title.substring(0, 18)}... removed`)
    };

    const onClearPlaylist = () => {
        const data = {
            type: "clear",
            room: roomData.room,
        };
        emitUpdateSong(data);
        setAlert(`Playlist removed`);
    };

    return (
        <div className={styles.container}>

            {user._id === roomData.admin && 
                <div className={styles.clear}>
                    <b> SONGS {roomData.index+1} / {roomData.songs.length}</b>
                    <button onClick={onClearPlaylist}><b>Clear</b></button>
                </div>
            }

            <div className={styles.map}>
                {roomData.songs.map((el, index) => 
                    <div key={generateid()} className={`${styles.element} ${index === roomPlaying.index ? styles.selected : ""}`} onClick={onPlay(index)}>
                        <div className={styles.image}>
                            <img src={el.image} alt="player" />
                            <span className={styles.index}>{index+1}</span>
                        </div>
                        <div className={styles.information}>
                            <p>{el.title}</p>
                        </div>
                        <div className={styles.duration}>
                            <p>{MinSec(el.duration)}</p>
                        </div>
                        <div className={styles.delete}>
                            <button onClick={onDelete(index, el)}><FaRegTrashAlt/></button>
                        </div>
                    </div>    
                )}
            </div>
        </div>
    )
}

export default Playlist