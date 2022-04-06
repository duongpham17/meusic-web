import React from 'react';

import {BiShuffle, BiRepeat} from 'react-icons/bi';

import Dropdown from '../components/Dropdown';

const Cycle = (props) => {

    const {shuffle, loop, trackCycleType} = props;

    return (
        <Dropdown button={
            <button onClick={trackCycleType === "loop" ? shuffle : loop}>
                { trackCycleType === "shuffle" ? <BiShuffle/> : <BiRepeat/>}
            </button>
        } />
    )
}

export default Cycle