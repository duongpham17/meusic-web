import styles from './ScrollToTop.module.scss';
import React from 'react';

import { connect } from 'react-redux';

import {MdOutlineKeyboardArrowUp} from 'react-icons/md';

import useScroll from 'hooks/useScroll';

const ScrollToTop = (props) => {

    const {playing} = props;

    const {axis, onScrollToTop} = useScroll();
        
    return ( axis.y >= 1000 &&
        <div className={`${styles.container} ${playing.song && styles.playingOpen}`}>
            <button onClick={onScrollToTop}>
                <MdOutlineKeyboardArrowUp />
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    playing: state.playingReducers
})

export default connect(mapStateToProps)(ScrollToTop)