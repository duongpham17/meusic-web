import styles from './Player.module.scss';
import React from 'react';
import {connect} from 'react-redux';

import useOpen from 'hooks/useOpen';

import Audio from './audio';
import Resize from './resize';

export const Player = (props) => {

    const {playing} = props;

    const {song} = playing;

    const {onOpen, open} = useOpen();

    props = {
        ...props,
        onOpen,
        open
    };

    return ( 
        <div className={`${styles.container} ${`${song.title && styles.open}`}  ${`${open && styles.closed}`} ` }>
            {song.title && <Audio {...props} />}
            <Resize open={open} onOpen={onOpen} />
        </div>
    )
};

const mapStateToProps = state => ({
    playing: state.playingReducers
});

export default connect(mapStateToProps)(Player);
