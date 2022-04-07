import styles from './Tracks.module.scss';
import React from 'react';

import {connect} from 'react-redux';
import {playingChangeSong } from 'redux/actions/playingActions';
import {openContent} from 'redux/actions/openActions';

import SlideIn from 'components/slideIn';
import InformationLayout3 from 'components/informationLayout/Layout3';

const Tracks = (props) => {

    const {playing, playingChangeSong, openContent, open} = props;

    const isPlaying = (element) => playing.playlistType === "previewPlaylist" ?  playing.song.previewId === element.previewId : playing.song._id === element._id;

    const onPlay = (index) => () => playingChangeSong(index);

    const onOpen = () => openContent("tracks");

    return (
        <div className={styles.container}>
            <SlideIn open={open.id === "tracks"} onOpen={onOpen}>

                <div className={styles.total}>
                    <b>Total Songs : {playing.playlist.length}</b>
                </div>
                
                {playing.playlist.map((el, index) => 
                    <div className={styles.element} key={el.previewId || el._id} onClick={onPlay(index)}>
                        <InformationLayout3 song={el} isPlaying={isPlaying(el)} index={index+1}/>
                    </div>
                )}
                
            </SlideIn>
        </div>
    );
}

const mapStateToProps = state => ({
    playing: state.playingReducers,
    open: state.openReducers
});

const mapDispatchToProps = {
    openContent,
    playingChangeSong
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);