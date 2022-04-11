import React from 'react';

import SongInformationLayout1 from 'components/informationLayout/Layout1';

export const Information = (props) => {

    const {song, playing} = props;

    const isPlaying = playing.song.title === song.title;

    return (
        <SongInformationLayout1 {...props} isPlaying={isPlaying} played/>
    )
}

export default Information;