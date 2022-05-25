import styles from './Alphabetical.module.scss';
import React, {useMemo} from 'react';
import { generateid } from 'utils/generateid';
import {HashLink} from 'react-router-hash-link';

export const Alphabetical = (props) => {

  const {songsList} = props;

  const memoFilteredSongList = useMemo(() => [...new Set(songsList.map(el => el.artist.slice(0, 1).toUpperCase()))], [songsList]);

  const sort = localStorage.getItem("savedPlaylist-sort") === "artist" || !localStorage.getItem("savedPlaylist-sort") === "artist";

  return ( sort &&
    <div className={styles.container}>
      <div className={styles.map}>
        {memoFilteredSongList.map(el => 
          <li key={generateid()}>
            <HashLink to={`/saved#${el}`}>{el.toUpperCase()}</HashLink>
          </li>
        )}
      </div>
    </div>
  )
}

export default Alphabetical;