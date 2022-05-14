import React, {useRef, useEffect, useState} from 'react';

import { connect } from 'react-redux';
import { savedPlaylistSave, savedPlaylistRemove } from 'redux/actions/savedPlaylistActions';
import { playingChangeSong, playingIncrementSongPlayed } from 'redux/actions/playingActions';
import { utilsOpenContent } from 'redux/actions/utilsActions';

import useAudio from 'hooks/useAudio';

import Small from './small';
import Large from './large';

export const AudioPlayer = (props) => {

    // redux reducers
    const {song, playlist} = props.playingReducers;

    // redux actions
    const {playingChangeSong, playingIncrementSongPlayed} = props;

    // useState
    const {resize} = props;

    const [played, setPlayed] = useState(""); // enum "incremented" || "awaiting"

    const audio = useRef("");

    const useAudioHook = useAudio(audio, playlist, song);

    // custom update global state
    useEffect(() => {
        playingChangeSong(useAudioHook.trackIndex);
    }, [playingChangeSong, useAudioHook.trackIndex]); 

    useEffect(() => {
        setPlayed("awaiting");
    }, [song.title]);
    
    useEffect(() => {

        const {trackPlayedProgress, trackPlaying} = useAudioHook;

        const listenedForHalfOfTrack = Math.round(trackPlayedProgress / 2) >= trackPlaying.duration;

        if(played === "awaiting" && listenedForHalfOfTrack) {
            setPlayed("incremented");
            playingIncrementSongPlayed(song._id);
        };

    }, [played, playingIncrementSongPlayed, song._id, useAudioHook])

    props = {
        ...props,
        ...useAudioHook,
    };

    return (
        <> 

            <audio ref={audio} autoPlay/>

            {resize !== "large" && <Small {...props} />}

            {resize === "large" && <Large  {...props} />}

        </>
    );
};

const mapDispatchToProps = {
    playingChangeSong,
    playingIncrementSongPlayed,
    utilsOpenContent,
    savedPlaylistRemove,
    savedPlaylistSave
}

export default connect(null, mapDispatchToProps)(AudioPlayer);
