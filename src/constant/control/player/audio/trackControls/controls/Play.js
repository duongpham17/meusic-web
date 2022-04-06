import React from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

import Dropdown from '../components/Dropdown';

export const Play = (props) => {

    const {pause, play, trackPaused} = props;

    return ( 
        <Dropdown button={ 
            <button type="button" aria-label="Pause" onClick={trackPaused ? play : pause}>
                {trackPaused ? <BsFillPlayFill /> : <BsPauseFill />}
            </button>
        } /> 
    );
}

export default Play;
  