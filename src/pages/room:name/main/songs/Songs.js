import styles from './Songs.module.scss';
import React, {useState, lazy, Suspense } from 'react';
import SlideIn from 'components/slideIn';

const LazySaved = lazy(() => import('./saved'));
const LazyFind = lazy(() => import('./find'));
const LazyCustomise = lazy(() => import('./customise'));

const Songs = (props) => {

    const {savedPlaylist} = props;

    const [open, setOpen] = useState("");

    const onOpen = type => {
        if(type === open) return setOpen("");
        setOpen(type);
    };

    return (
        <section className={styles.container}>
            
            <div className={styles.content} onClick={() => onOpen("saved")}>
                <button className={styles.button}>My Songs</button>
                <Suspense fallback={<div className="loading-10"/>}>
                    <SlideIn onOpen={onOpen} open={open === "saved"}>
                        {savedPlaylist.playlist && <LazySaved {...props} />}
                    </SlideIn>
                </Suspense>
            </div>

            <div className={styles.content} onClick={() => onOpen("customise")}>
                <button className={styles.button}>My Playlists</button>
                <Suspense fallback={<div className="loading-10"/>}>
                    <SlideIn onOpen={onOpen} open={open === "customise"}>
                        <LazyCustomise {...props} />
                    </SlideIn>
                </Suspense>
            </div>

            <div className={styles.content} onClick={() => onOpen("find")}>
                <button className={styles.button}>Search</button>
                <Suspense fallback={<div className="loading-10"/>}>
                    <SlideIn onOpen={onOpen} open={open === "find"}>
                        <LazyFind {...props} />
                    </SlideIn>
                </Suspense>
            </div>

        </section>
    )
}

export default Songs