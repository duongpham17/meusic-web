import styles from './Songs.module.scss';
import React, {useState} from 'react';

import {MinSec} from 'utils/time';
import {generateid} from 'utils/generateid';
import {MdRemove} from 'react-icons/md';

const Songs = (props) => {

    const { selectedPlaylist, setSelectedPlaylist, edited, setEdited } = props;

    const [insert, setInsert] = useState("");
 
    const onInsert = (index) => () => {
        if(insert === "") return setInsert(index);
        const song = selectedPlaylist.song[insert];
        const newPlaylist = selectedPlaylist;
        newPlaylist.song.splice(insert, 1);
        newPlaylist.song.splice(index, 0, song);
        setSelectedPlaylist(newPlaylist);
        setInsert("");
        if(!edited) setEdited(true);
    };

    const onRemoveSong = (index) => (e) => {
        e.stopPropagation();
        const song = selectedPlaylist.song;
        song.splice(index, 1);
        setSelectedPlaylist({ ...selectedPlaylist, song });
        if(!edited) setEdited(true);
    };

    return (
        <div className={styles.container}>

            {selectedPlaylist?.song.map((el, index) => 
                <div key={generateid()} className={`${styles.element} ${`${insert === index && styles.insert}`}`} onClick={onInsert(index)}>

                    <div className={styles.image}>
                        <img src={el.image} alt="i"/>
                    </div>

                    <div className={styles.title}>
                        <p>{el.title}</p>
                        <p>{MinSec(el.duration)}</p>
                    </div>

                    <div className={styles.remove} onClick={onRemoveSong(index)}>
                        {el.new && <p className={styles.new}>new</p>}
                        <button><MdRemove/></button>
                    </div>

                </div>    
            )}
        </div>
    )
}

export default Songs