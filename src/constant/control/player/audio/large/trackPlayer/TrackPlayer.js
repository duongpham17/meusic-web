import styles from './TrackPlayer.module.scss';
import React from 'react';
import {BsFillPlayFill, BsPauseFill, BsFillSkipEndFill, BsFillSkipStartFill} from 'react-icons/bs';

export const TrackPlayer = (props) => {

    const {pause, play, next, previous, trackPaused, trackLoading} = props;

    return ( 
        <div className={styles.container}>

            <div>
                <button type="button" aria-label="Previous" onClick={previous}>
                    <BsFillSkipStartFill/>
                </button>
            </div>

            <div className={styles.playBtn}>
                { 
                    trackLoading 
                    ? 
                        <button type="button">
                            <p className="loading-20" />
                        </button>
                    :
                        <button type="button" aria-label="Pause" onClick={trackPaused ? play : pause}>
                            {trackPaused ? <BsFillPlayFill /> : <BsPauseFill />}
                        </button>
                }
            </div>

            <div>
                <button type="button" aria-label="Next" onClick={next}>
                    <BsFillSkipEndFill/>
                </button>
            </div>


        </div>
    );
}

export default TrackPlayer