import React from 'react';

import {BiShuffle, BiRepeat, BiInfinite} from 'react-icons/bi';

import Dropdown from '../components/dropdown';

const Cycle = (props) => {

    const {onShuffle, onLoop, onRepeat, trackCycleType} = props;

    const onCycle = () => {
        if(trackCycleType === "loop") return onShuffle();
        if(trackCycleType === "shuffle") return onRepeat();
        if(trackCycleType === "repeat") return onLoop();
    };

    return (
        <Dropdown button={
            <button onClick={onCycle}>
                {trackCycleType === "loop" && <BiRepeat/>}
                {trackCycleType === "shuffle" && <BiShuffle/>}
                {trackCycleType === "repeat" && <BiInfinite/>}
            </button>
        }/>
    )
}

export default Cycle