import React, {useRef, useEffect} from 'react';

import { connect } from 'react-redux';
import { savedPlaylistSave, savedPlaylistRemove } from 'redux/actions/savedPlaylistActions';
import { playingChangeSong, playingIncrementSongPlayed } from 'redux/actions/playingActions';
import { utilsOpenContent } from 'redux/actions/utilsActions';

import useAudio from 'hooks/useAudio';

import Small from './small';
import Large from './large';

export const AudioPlayer = (props) => {

    const {playingChangeSong, playingIncrementSongPlayed, resize} = props;

    const {song, playlist} = props.playingReducers;

    const audio = useRef("");

    const useAudioHook = useAudio(audio, playlist, song);

    // custom update global state
    useEffect(() => {
        playingChangeSong(useAudioHook.trackIndex);
    }, [playingChangeSong, useAudioHook.trackIndex]); 
    
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
