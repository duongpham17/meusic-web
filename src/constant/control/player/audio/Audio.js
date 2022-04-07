import React, {useRef, useEffect} from 'react';

import { connect } from 'react-redux';
import { playingChangeSong, playingIncrementSongPlayed } from 'redux/actions/playingActions';
import { openContent } from 'redux/actions/openActions';

import useAudio from 'hooks/useAudio';

import TrackInformation from './trackInformation';
import TrackProgress from './trackProgress';
import TrackControls from './trackControls';

export const AudioPlayer = (props) => {

    const {playing, playingChangeSong, playingIncrementSongPlayed} = props;

    const {song, playlist} = playing;

    const audio = useRef("");

    const useAudioHook = useAudio(audio, playlist, song);

    const {trackIndex} = useAudioHook;

    // custom update global state
    useEffect(() => {
        playingChangeSong(trackIndex);
    }, [playingChangeSong, trackIndex]); 
    
    useEffect(() => {
        playingIncrementSongPlayed(song._id)
    }, [playingIncrementSongPlayed, song._id]);

    props = {
        ...props,
        ...useAudioHook,
    };

    return (
        <> 

            <audio ref={audio} autoPlay/>

            <TrackInformation {...props} />

            <TrackProgress {...props} />

            <TrackControls {...props} />

        </>
    );
};

const mapDispatchToProps = {
    playingChangeSong,
    playingIncrementSongPlayed,
    openContent
}

export default connect(null, mapDispatchToProps)(AudioPlayer);
