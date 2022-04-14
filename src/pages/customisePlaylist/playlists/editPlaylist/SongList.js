import styles from './SongList.module.scss';
import React, {useState} from 'react';

import SlideIn from 'components/slideIn/SlideIn';

const SongList = (props) => {

    const {savedPlaylist, setSelectedPlaylist, selectedPlaylist, onOpen, open, setEdited, edited} = props;

    const initalState = savedPlaylist.playlist;

    const [search, setSearch] = useState(initalState);
    const [value, setValue] = useState("");

    const onChange = (e) => {
        const {value} = e.target;
        setValue(value);
        if(value.length >= 1) setSearch(search.filter(el => el.title.toLowerCase().includes(value) && el));
        if(!value) setSearch(initalState)
        if(!edited) setEdited(true);
    }

    const onAddSong = (song) => () => {
        setSelectedPlaylist({
            ...selectedPlaylist,
            song: [{...song, new: true}, ...selectedPlaylist.song]
        });
        if(!edited) setEdited(true);
    };

    return (
        <div className={styles.container}>
            <SlideIn open={open} onOpen={onOpen} cover={false}>
                <div className={styles.content}>

                <div className={styles.search}>
                    <input type="text" placeholder='Search' value={value} onChange={onChange} />
                </div>

                <div className={styles.total}>
                    <p>Songs</p>
                    <p>{savedPlaylist.playlist.length}</p>
                </div>

                {search.map(el => 
                    <div key={el._id} className={styles.element} onClick={onAddSong(el)}>
                        <img src={el.image} alt="saved" />
                        <p>{el.title}</p>
                    </div>    
                )}

                </div>
            </SlideIn>
        </div>
    )
}

export default SongList