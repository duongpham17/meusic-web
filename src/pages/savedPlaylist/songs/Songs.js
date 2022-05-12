import styles from './Songs.module.scss';
import React from 'react';

import ContextMenu from 'components/contextMenu';
import useOpen from 'hooks/useOpen';

import Information from './Information';
import Options from './Options';
import Alphabetical from './Alphabetical';

export const Songs = (props) => {

  const {songsList, playingSelectPlaylist, savedPlaylist} = props;

  const {openValue, setOpenValue} = useOpen();

  const onPlay = (song) => () => {
    const songIndex = savedPlaylist.playlist.findIndex(el => el._id === song._id);
    playingSelectPlaylist("savedPlaylist", songIndex, savedPlaylist.playlist);
  };

  const NothingFound = () => (
    <div className={styles.nothing}>
      <h3>Nothing found</h3>
    </div>
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
              <ContextMenu key={el._id} id={el._id} open={openValue} setOpen={setOpenValue} menu={<Options {...props} song={el} dropdown={false} />}>
                <div className={styles.element} onClick={onPlay(el)} id={el.artist.slice(0, 1)}> 

                  <Information {...props} song={el} index={index} />

                  <Options {...props} song={el} />

                </div>  
              </ContextMenu>
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