import styles from './Play.module.scss';
import React from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

export const Play = (props) => {

    const {trackLoading, trackPaused, onPlay, onPause} = props;

    const onClick = () => {
        if(trackPaused) onPlay();
        if(!trackPaused) onPause();
    };

    return (
        <div className={styles.container}>
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
    )
}

export default Play