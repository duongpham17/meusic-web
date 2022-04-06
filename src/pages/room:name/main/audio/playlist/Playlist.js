import styles from './Playlist.module.scss';
import React from 'react';
import { generateid } from 'utils/generateid';
import { FaRegTrashAlt } from 'react-icons/fa';

const Playlist = (props) => {

    const {roomData, user, roomPlaying, emitChangeSong, emitUpdateSong, setAlert} = props;

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

            {user.user._id === roomData.admin && 
                <div className={styles.element} onClick={onClearPlaylist}>
                    CLEAR
                </div>
            }

            {roomData.songs.map((el, index) => 
                <div key={generateid()} className={`${styles.element} ${index === roomPlaying.index ? styles.selected : ""}`} onClick={onPlay(index)}>
                    <img src={el.image} alt="player" />
                    <p>{el.title}</p>
                    <span className={styles.index}>{index+1}</span>
                    <span className={styles.delete} onClick={onDelete(index, el)}><FaRegTrashAlt/></span>
                </div>    
            )}
        </div>
    )
}

export default Playlist