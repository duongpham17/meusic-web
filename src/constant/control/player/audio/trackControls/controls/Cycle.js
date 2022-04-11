import React from 'react';

import {BiShuffle, BiRepeat, BiInfinite} from 'react-icons/bi';

import Dropdown from '../components/Dropdown';

const Cycle = (props) => {

    const {shuffle, loop, repeat, trackCycleType} = props;

    const onCycle = () => {
        if(trackCycleType === "loop") return shuffle();
        if(trackCycleType === "shuffle") return repeat();
        if(trackCycleType === "repeat") return loop();
    }

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