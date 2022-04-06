import styles from './Alphabetical.module.scss';
import React, {useMemo} from 'react';
import { generateid } from 'utils/generateid';

export const Alphabetical = (props) => {

  const {songsList} = props;

  const memoFilteredSongList = useMemo(() => [...new Set(songsList.map(el => el.artist.slice(0, 1)))], [songsList]);

  const sort = localStorage.getItem("savedPlaylist-sort") === "artist" || !localStorage.getItem("savedPlaylist-sort") === "artist";

  return ( sort &&
    <div className={styles.container}>
      <div className={styles.map}>
        {memoFilteredSongList.map(el => 
          <li key={generateid()}>
            <a href={`#${el.toUpperCase()}`}>{el.toUpperCase()}</a>
          </li>
        )}
      </div>
    </div>
  )
}

export default Alphabetical;