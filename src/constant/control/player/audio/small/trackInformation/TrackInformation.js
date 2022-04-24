import styles from './TrackInformation.module.scss';
import React from 'react';
import {BsFillPlayFill, BsPauseFill, BsSuitHeartFill, BsSuitHeart} from 'react-icons/bs';

export const AudioInformation = (props) => {

    const {trackPlaying, trackLoading, onResize, trackPaused, play, pause, savedPlaylist, savedPlaylistRemoveFrom, savedPlaylistAddTo} = props;

    const onClick = () => {
        if(trackPaused) play();
        if(!trackPaused) pause();
    };

    const stopPropagation = (e) => e.stopPropagation();

    const alreadyAdded = (songs, id) => songs.map(el => el._id).includes(id);

    return (
        <div className={styles.container} onClick={() => onResize("large")}>
            <div className={styles.info}>
                <img src={trackPlaying.image} alt="small" />
                <p>{trackPlaying.title}</p> 
            </div>

            <div className={styles.controls} onClick={stopPropagation}>

                <div className={styles.heart}>
                    { alreadyAdded(savedPlaylist.playlist, trackPlaying._id) 
                        ?
                            <button onClick={() => savedPlaylistRemoveFrom(trackPlaying._id)}>
                                <BsSuitHeartFill />
                            </button>
                        : 
                            <button onClick={() => savedPlaylistAddTo(trackPlaying._id)}>
                                <BsSuitHeart />
                            </button>
                    }
                </div>

                <div className={styles.play}>
                    { trackLoading 
                        ? 
                            <button>
                                <p className="loading-15" />
                            </button>
                        :
                            <button onClick={onClick} >
                                {trackPaused ? <BsFillPlayFill /> : <BsPauseFill />}
                            </button>
                    }
                </div>

            </div>
        </div>
    )
}

export default AudioInformation;
