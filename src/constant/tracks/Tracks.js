import styles from './Tracks.module.scss';
import React from 'react';

import {connect} from 'react-redux';
import {playingChangeSong } from 'redux/actions/playingActions';
import {utilsOpenContent} from 'redux/actions/utilsActions';

import SlideIn from 'components/slideIn';
import InformationLayout2 from 'components/informationLayout/Layout2';

const Tracks = (props) => {

    const {playing, playingChangeSong, utilsOpenContent, utils} = props;

    const isPlaying = (element) => playing.playlistType === "previewPlaylist" ?  playing.song.previewId === element.previewId : playing.song._id === element._id;

    const onPlay = (index) => () => playingChangeSong(index);

    const onOpen = () => utilsOpenContent("tracks");

    return (
        <div className={styles.container}>
            <SlideIn open={utils.open === "tracks"} onOpen={onOpen}>

                <div className={styles.total}>
                    <b>Songs {playing.playlist.length}</b>
                </div>
                
                {playing.playlist.map((el, index) => 
                    <div className={styles.element} key={el.previewId || el._id} onClick={onPlay(index)}>
                        <InformationLayout2 song={el} isPlaying={isPlaying(el)} index={index+1}/>
                    </div>
                )}
                
            </SlideIn>
        </div>
    );
}

const mapStateToProps = state => ({
    playing: state.playingReducers,
    utils: state.utilsReducers
});

const mapDispatchToProps = {
    utilsOpenContent,
    playingChangeSong,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);