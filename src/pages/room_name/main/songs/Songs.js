import styles from './Songs.module.scss';
import React, {useState} from 'react';
import SlideIn from 'components/slideIn';

import Saved from './saved';
import Find from './find';
import Customise from './customise';

const Songs = (props) => {

    const {savedPlaylist} = props;

    const [open, setOpen] = useState("");

    const onOpen = type => {
        if(type === open) return setOpen("");
        setOpen(type);
    };

    props = {
        ...props,
        open,
        onOpen
    }

    return (
        <section className={styles.container}>
            
            <div className={styles.content} onClick={() => onOpen("saved")}>
                <button className={styles.button}>My Songs</button>
                <SlideIn onOpen={onOpen} open={open === "saved"}>
                    {savedPlaylist.playlist && open === "saved" && <Saved {...props} />}
                </SlideIn>
            </div>

            <div className={styles.content} onClick={() => onOpen("customise")}>
                <button className={styles.button}>My Playlists</button>
                <SlideIn onOpen={onOpen} open={open === "customise"}>
                    {open === "customise" && <Customise {...props} />}
                </SlideIn>
            </div>

            <div className={styles.content} onClick={() => onOpen("find")}>
                <button className={styles.button}>Search</button>
                <SlideIn onOpen={onOpen} open={open === "find"}>
                    {open === "find" && <Find {...props} />}
                </SlideIn>
            </div>

        </section>
    )
}

export default Songs