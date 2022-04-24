import React from 'react';

import {BsShuffle} from 'react-icons/bs';
import BigButton from '../component/BigButton';
import useApiUpdate from 'hooks/useApiUpdate';

const RandomisePlaylist = (props) => {

  const {customisePlaylistRandomise} = props;

  const {loading, request} = useApiUpdate();

  const onClick = () => {
    console.log("clicked", loading)
    if(loading) return;
    request(customisePlaylistRandomise());
  }

  return (
    <div>
        {!loading && <BigButton icon={<BsShuffle/>} description="Randomise" onClick={onClick}/>}
        {loading && <BigButton icon={<div className='loading-15 center'/>} description="Creating" />}
    </div>
  )
}

export default RandomisePlaylist