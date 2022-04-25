import styles from './ScrollToTop.module.scss';
import React from 'react';

import { connect } from 'react-redux';

import {MdOutlineKeyboardArrowUp} from 'react-icons/md';

import useScroll from 'hooks/useScroll';

const ScrollToTop = (props) => {

    const {song} = props.playingReducers

    const {axis, onScrollToTop} = useScroll();
        
    return ( axis.y >= 1000 &&
        <div className={`${styles.container} ${song && styles.trackOpen}`}>
            <button onClick={onScrollToTop}>
                <MdOutlineKeyboardArrowUp />
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    playingReducers: state.playingReducers
})

export default connect(mapStateToProps)(ScrollToTop)