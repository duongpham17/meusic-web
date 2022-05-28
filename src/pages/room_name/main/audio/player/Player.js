import styles from './Player.module.scss';
import React, {useEffect, useRef} from 'react';

import useAudio from 'hooks/useAudio';

import Song from './song';
import Volume from './volume';
import Autoplay from './autoplay';
import Controls from './controls';

export const Player = (props) => {

    const {roomData, setRoomPlaying, roomPlaying} = props;

    const audio = useRef("");

    const useAudioHook = useAudio(audio, roomData.songs, roomPlaying);

    const {trackIndex, trackPlaying, onSeek} = useAudioHook;

    useEffect(() => {
        setRoomPlaying(trackPlaying);
    }, [trackIndex, setRoomPlaying, trackPlaying]); 
    
    props = {
        ...props,
        ...useAudioHook,
    };

    return (
        <div className={styles.container}>
            <audio ref={audio} />

            <button onClick={() => onSeek(trackPlaying.duration - 3)}> seek </button>
            
            <Song {...props} />   

            <Controls {...props} />

            <Volume {...props} />    

            <Autoplay {...props} />
        </div>
    )
}

export default Player;