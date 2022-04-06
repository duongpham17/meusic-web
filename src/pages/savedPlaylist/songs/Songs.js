import styles from './Songs.module.scss';
import React from 'react';

import Information from './Information';
import Edit from './Edit';
import Alphabetical from './Alphabetical';

export const Songs = (props) => {

  const {songsList, playingSelectPlaylist, savedPlaylist} = props;

  const onPlay = (song) => () => {
    const songIndex = savedPlaylist.playlist.findIndex(el => el._id === song._id);
    playingSelectPlaylist("savedPlaylist", songIndex, savedPlaylist.playlist);
  };

  const NothingFound = () => (
    <p className="center">Nothing found</p>
  );

  return (
    <div className={styles.container}>
      { 
          !songsList.length 
        ? 
          <NothingFound/>
        : 
          <div className={styles.songs}>

            <div className={styles.map}>
            { songsList.map((el, index) => 
              <div className={styles.element} key={el._id} onClick={onPlay(el)} id={el.artist.slice(0, 1)}> 

                <Information {...props} song={el} index={index} />

                <Edit {...props} song={el} />

              </div>  
            )}
            </div>

            <div>
              <Alphabetical {...props} />
            </div>

        </div>
      }
    </div>
  )
}

export default Songs