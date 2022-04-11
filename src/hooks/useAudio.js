import {useEffect, useState, useCallback} from 'react';

/**
 * @param { React.useRef } audio - React useRef to get document functions
 * @param { Object[] } tracks - Array of songs
 * @param { Object } song - Song that has been chosen, must include index
*/

const useAudio = (audio, tracks, song) => {

    //is audio paused or playing
    const trackPaused = audio.current.paused;

    const [trackPlaying, setTrackPlaying] = useState(song);
    const [trackIndex, setTrackIndex] = useState(song.index || 0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [trackError, setTrackError] = useState(false);
    const [trackEnded, setTrackEnded] = useState(false);
    const [trackMuted, setTrackMuted] = useState(JSON.parse(localStorage.getItem("muted")) || false);
    const [trackVolume, setTrackVolume] = useState(JSON.parse(localStorage.getItem("muted")) ? 0 : localStorage.getItem("volume"));
    const [trackCycleType, setTrackCycleType] = useState(localStorage.getItem("cycleType") || "loop");

    const play = () => audio.current.play();

    const pause = () => audio.current.pause();

    // Seek the specified track time.
    const seek = (v) => {
        audio.current.currentTime = !v.target ? v : v.target.value;
    };

    // playBackRate
    const playbackRate = (v) => {
        const rateValue = !v.target ? v : v.target.value;
        localStorage.setItem("playbackRate", rateValue);
        audio.current.playbackRate = rateValue;
    };

    // change volume
    const volume = (v) => {
        const volumeValue = !v.target ? v : v.target.value;
        audio.current.volume = volumeValue;
        audio.current.muted = false;

        if(volumeValue <= 0){
            setTrackMuted(true);
            localStorage.setItem("muted", true);
        }

        if(volumeValue > 0){
            setTrackMuted(false);
            localStorage.setItem("muted", false);
        }

        setTrackVolume(volumeValue);
        localStorage.setItem("volume", volumeValue);
    };

    const muteVolume = () => {
        audio.current.muted = true;
        setTrackVolume(0);
        setTrackMuted(true);
        localStorage.setItem("previousVolume", audio.current.volume);
        localStorage.setItem("muted", true);
    };

    const previousVolume = () => {
        const previousVolumeValue = localStorage.getItem("previousVolume", audio.current.volume);
        audio.current.muted = false;
        setTrackVolume(previousVolumeValue);
        setTrackMuted(false);
    }

    // play song in order
    const loop = () => {
        localStorage.setItem("cycleType", "loop");
        setTrackCycleType("loop");
    }; 

    // play song in random order
    const shuffle = () => {
        localStorage.setItem("cycleType", "shuffle");
        setTrackCycleType("shuffle");
    };

    // play song in order
    const repeat = () => {
        localStorage.setItem("cycleType", "repeat");
        setTrackCycleType("repeat");
    };

    // play next track, loops to the start when it reaches the end.
    const next = useCallback(() => {
        const trackLength = tracks.length - 1;
        const randomIndex = Math.floor(Math.random() * trackLength + 1);

        if(trackLength === 0) return {...tracks[trackIndex]};

        // end of playlist
        if(trackLength <= trackIndex) {
            setTrackIndex(0);
            setTrackPlaying({...tracks[0], index: 0});
            return {...tracks[0], index: 0}
        }
        
        if(trackLength !== trackIndex) {
            // go to next random track
            if(trackCycleType === "repeat"){
                setTrackIndex(trackIndex);
                setTrackPlaying({...tracks[trackIndex], index: trackIndex});
                return {...tracks[trackIndex], index: trackIndex}
            };
            if(trackCycleType === "shuffle") {
                setTrackIndex(() => randomIndex);
                setTrackPlaying({...tracks[randomIndex], index: randomIndex});
                return {...tracks[randomIndex], index: randomIndex};
            };
            // go to next track
            if(trackCycleType === "loop" || !trackCycleType){ 
                setTrackIndex((trackIndex) => trackIndex+1);
                setTrackPlaying({...tracks[trackIndex+1], index: trackIndex+1});
                return {...tracks[trackIndex+1], index: trackIndex+1}
            };
        };

    }, [trackIndex, trackCycleType, tracks]);

    // play previous track, loops to the end when it reaches the start.
    const previous = useCallback(() => {
        const trackLength = tracks.length - 1;

        // playlist only has one song
        if(trackLength === 0) return {...tracks[trackIndex]};

        // start of track, go to end of track
        if(trackIndex === 0) {
            setTrackIndex(trackLength);
            setTrackPlaying({...tracks[trackLength], index: trackLength});
            return {...tracks[trackLength], index: trackLength}
        }
        
        // go to previous track
        if(trackIndex !== 0) {
            setTrackIndex((trackIndex) => trackIndex-1);
            setTrackPlaying({...tracks[trackIndex-1], index: trackIndex-1});
            return {...tracks[trackIndex-1], index: trackIndex-1}
        };

    }, [trackIndex, tracks]); 

    // update selected song
    useEffect(() => {
        setTrackPlaying(song);
        setTrackIndex(song.index);
    }, [song]);

    // play song that is selected
    useEffect(() => {   
        const Audio = audio.current;

        Audio.pause();
        Audio.src = trackPlaying.url;
        Audio.load();

        const canplay = Audio.addEventListener("canplay", () => { 
            const volumeMuted = JSON.parse(localStorage.getItem("muted"));
            const volumeValue = JSON.parse(localStorage.getItem("volume"));
            const volume = volumeMuted ? 0 : volumeValue === 0 || volumeValue ? volumeValue : 1;
            const playbackRate = JSON.parse(localStorage.getItem("playbackRate") || 1);

            Audio.muted = volumeMuted;
            Audio.volume = volume;
            Audio.playbackRate = playbackRate;

            Audio.play();
        });

        return () => Audio.removeEventListener("canplay", canplay);
    }, [audio, trackIndex, trackPlaying]);   

    // keep track of progress
    useEffect(() => {
        const Audio = audio.current;
        const timeupdate = (e) => setTrackProgress(e.target.currentTime);
        Audio.addEventListener("timeupdate", timeupdate);
        return () => Audio.removeEventListener("timeupdate", timeupdate);
    }, [audio]); 

    //1. ENDED - keep track of when the audio has ended
    useEffect(() => {
        const Audio = audio.current;
        const ended = (e) => setTrackEnded(e.target.ended);
        const endedEvent = Audio.addEventListener("ended", ended);
        return () => Audio.removeEventListener("ended", endedEvent);
    }, [audio]);

    //1. ERROR - keep track of loading errors due to ipfs
    useEffect(() => {
        const Audio = audio.current;
        const error = () => setTrackError(true);
        const errorEvent = Audio.addEventListener("error", error);
        return () => Audio.removeEventListener("error", errorEvent);
    },[audio]);

    //2. play next
    useEffect(() => {
        if(!trackError && !trackEnded) return;
        if(trackError) setTrackError(false);
        if(trackEnded) setTrackEnded(false);
        next();
    }, [trackEnded, trackError, next]);
    
    return {
        audio, 

        tracks,
        trackPlaying,
        trackIndex,
        trackProgress,
        trackEnded,
        trackPaused,
        trackCycleType,
        trackVolume,
        trackMuted,

        playbackRate,
        previous,
        next,
        loop,
        shuffle,
        repeat,
        play,
        pause,
        seek,
        volume,
        muteVolume,
        previousVolume
    }
}

export default useAudio