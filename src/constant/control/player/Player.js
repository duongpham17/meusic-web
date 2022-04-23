import styles from './Player.module.scss';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {connect} from 'react-redux';

import Audio from './audio';
import Resize from './resize';

export const Player = (props) => {

    const {playing} = props;

    const [resize, setResize] = useState("small"); //enum "small" || "large";

    const location = useLocation();

    const onResize = (value) => {
        if(resize === value) return setResize("");
        setResize(value);
    };

    useEffect(() => {
        setResize("small")
    }, [location]);
    
    props = {
        ...props,
        onResize,
        setResize,
        resize
    };

    return ( 
        <div className={`${styles.container} ${`${playing.song.title && styles.open}`} ${`${resize === "large" && styles.large}`} ` }>
            {playing.song.title && <Audio {...props} />}
            <Resize {...props} />
        </div>
    )
};

const mapStateToProps = state => ({
    playing: state.playingReducers,
    savedPlaylist: state.savedPlaylistReducers
});

export default connect(mapStateToProps)(Player);
