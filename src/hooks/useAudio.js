import {useEffect, useState, useCallback} from 'react';

/**
 * @param { React.useRef } audio - React useRef to get document functions
 * @param { Object[] } tracks - Array of songs
 * @param { Object } song - Song that has been chosen, must include index
*/

const useAudio = (audio, tracks, song) => {

    //is audio paused or playing
    const [trackPlaying, setTrackPlaying] = useState(song);
    const [trackIndex, setTrackIndex] = useState(song.index || 0);
    const [trackPaused, setTrackPaused] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    const [trackPlayedProgress, setTrackPlayedProgress] = useState(0);
    const [trackLoading, setTrackLoading] = useState(false);
    const [trackError, setTrackError] = useState(false);
    const [trackMuted, setTrackMuted] = useState(JSON.parse(localStorage.getItem("trackMuted")) || false);
    const [trackVolume, setTrackVolume] = useState(JSON.parse(localStorage.getItem("trackMuted")) ? 0 : localStorage.getItem("trackMuted"));
    const [trackCycleType, setTrackCycleType] = useState(localStorage.getItem("trackCycle") || "loop");
    const [trackPlaybackRate, setTrackPlaybackRate] = useState(JSON.parse(localStorage.getItem("trackPlaybackRate")) || 1);

    const onPlay = () => {
        audio.current.play();
        setTrackPaused(false);
    }

    const onPause = () => {
        audio.current.pause();
        setTrackPaused(true);
    }

    // Seek the specified track time.
    const onSeek = (val) => {
        audio.current.currentTime = !val.target ? val : val.target.value;
    };

    // playBackRate
    const onPlaybackRate = (v) => {
        const rateValue = !v.target ? v : v.target.value;
        localStorage.setItem("trackPlaybackRate", rateValue);
        setTrackPlaybackRate(rateValue);
        audio.current.playbackRate = rateValue;
    };

    // change volume
    const onVolume = (v) => {
        const volumeValue = !v.target ? v : v.target.value;
        audio.current.volume = volumeValue;
        audio.current.muted = false;

        if(volumeValue <= 0){
            setTrackMuted(true);
            localStorage.setItem("trackMuted", true);
        }

        if(volumeValue > 0){
            setTrackMuted(false);
            localStorage.setItem("trackMuted", false);
        }

        setTrackVolume(volumeValue);
        localStorage.setItem("trackVolume", volumeValue);
    };

    const onMuteVolume = () => {
        audio.current.muted = true;
        setTrackVolume(0);
        setTrackMuted(true);
        localStorage.setItem("trackPreviousVolume", audio.current.volume);
        localStorage.setItem("trackMuted", true);
    };

    const onPreviousVolume = () => {
        const previousVolumeValue = localStorage.getItem("trackPreviousVolume", audio.current.volume);
        audio.current.muted = false;
        setTrackVolume(previousVolumeValue);
        setTrackMuted(false);
    }

    // play song in order
    const onLoop = () => {
        localStorage.setItem("trackCycle", "loop");
        setTrackCycleType("loop");
    }; 

    // play song in random order
    const onShuffle = () => {
        localStorage.setItem("trackCycle", "shuffle");
        setTrackCycleType("shuffle");
    };

    // play same song over and over again
    const onRepeat = () => {
        localStorage.setItem("trackCycle", "repeat");
        setTrackCycleType("repeat");
    };

    // play next track, loops to the start when it reaches the end.
    const onNext = useCallback(() => {
        const trackLength = tracks.length - 1;
        const randomIndex = Math.floor(Math.random() * trackLength + 1);

        if(trackLength === 0) return {...tracks[trackIndex]};

        // end of playlist
        if(trackLength <= trackIndex) {
            setTrackIndex(0);
            setTrackPlaying({...tracks[0], index: 0});
            return {...tracks[0], index: 0}
        }
        
        // next song
        if(trackLength !== trackIndex) {
            if(trackCycleType === "shuffle") {
                setTrackIndex(() => randomIndex);
                setTrackPlaying({...tracks[randomIndex], index: randomIndex});
                return {...tracks[randomIndex], index: randomIndex};
            };
            if(trackCycleType === "loop" || trackCycleType === "repeat" || !trackCycleType){ 
                setTrackIndex((trackIndex) => trackIndex+1);
                setTrackPlaying({...tracks[trackIndex+1], index: trackIndex+1});
                return {...tracks[trackIndex+1], index: trackIndex+1}
            };
        };

    }, [trackIndex, trackCycleType, tracks]);

    // play previous track, loops to the end when it reaches the start.
    const onPrevious = useCallback(() => {
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
        setTrackPlayedProgress(0);

        const {current} = audio;
        current.src = song.url;
        current.currentTime = 0;

    }, [song, audio]);

    // play song that is selected
    useEffect(() => {   
        setTrackLoading(true);

        const {current} = audio;

        const canplay = current.addEventListener("canplay", () => { 
            const volumeMuted = JSON.parse(localStorage.getItem("trackMuted"));
            const volumeValue = JSON.parse(localStorage.getItem("trackVolume"));
            const volume = volumeMuted ? 0 : volumeValue === 0 || volumeValue ? volumeValue : 1;
            const playbackRate = JSON.parse(localStorage.getItem("trackPlaybackRate") || 1);

            current.muted = volumeMuted;
            current.volume = volume;
            current.playbackRate = playbackRate;

            current.play();
            setTrackLoading(false);
        });

        return () => current.removeEventListener("canplay", canplay);
    }, [audio, trackIndex]);   

    // keep track of progress
    useEffect(() => {
        const Audio = audio.current;
        const timeupdate = (e) => setTrackProgress(Math.ceil(e.target.currentTime));
        Audio.addEventListener("timeupdate", timeupdate);
        return () => Audio.removeEventListener("timeupdate", timeupdate);
    }, [audio]); 

    //1. ENDED - keep track of when the audio has ended
    useEffect(() => {
        if(trackProgress === trackPlaying.duration) {
            if(trackCycleType === "repeat") audio.current.currentTime = 0;
            if(trackCycleType !== "repeat") onNext();
        }
    }, [trackPlaying.duration, trackProgress, onNext, trackCycleType, audio]);

    //1. ERROR - keep track of loading errors due to ipfs
    useEffect(() => {

        if(trackError){
            setTrackError(false);
            const Audio = audio.current;
            Audio.load();
        }   

        let errorEvent;
        
        if(!trackError) {
            const Audio = audio.current;
            const error = () => setTrackError(true);
            errorEvent = Audio.addEventListener("error", error);
        }

        return () => Audio.removeEventListener("error", errorEvent);

    },[audio, trackError]);

    // keep track of played time
    useEffect(() => {
        const interval = setInterval(() => {
            setTrackPlayedProgress(trackPlayedProgress => trackPlayedProgress + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return {
        audio, 
        tracks,
        song,

        trackPlaying, setTrackPlaying,
        trackIndex, setTrackIndex,
        trackProgress, setTrackProgress,
        trackPaused, setTrackPaused,
        trackCycleType, setTrackCycleType,
        trackVolume, setTrackVolume,
        trackMuted, setTrackMuted,
        trackLoading, setTrackLoading,
        trackPlaybackRate, setTrackPlaybackRate,
        trackPlayedProgress, setTrackPlayedProgress,

        onPlaybackRate,
        onPrevious,
        onNext,
        onLoop,
        onShuffle,
        onRepeat,
        onPlay,
        onPause,
        onSeek,
        onVolume,
        onMuteVolume,
        onPreviousVolume
    }
}

export default useAudio