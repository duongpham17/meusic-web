import React from 'react';

import {BsShuffle} from 'react-icons/bs';
import BigButton from '../component/BigButton';

const RandomisePlaylist = () => {
  return (
    <div>
        <BigButton icon={<BsShuffle/>} description="Randomise"/>
    </div>
  )
}

export default RandomisePlaylist