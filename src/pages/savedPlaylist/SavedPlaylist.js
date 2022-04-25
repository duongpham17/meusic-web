import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import { playingSelectPlaylist } from 'redux/actions/playingActions';
import { savedPlaylistGetSongs, savedPlaylistRemove } from 'redux/actions/savedPlaylistActions';
import { utilsDownloadOptions } from 'redux/actions/utilsActions';

import useUrlDownload from 'hooks/useUrlDownload';

import SearchBar from './searchBar';
import Sort from './sort';
import AddToPlaylist from './addToPlaylist';
import Songs from './songs';

const SavedPlaylist = (props) => {

  const {savedPlaylist} = props;

  const {download} = useUrlDownload();
  
  const [songsList, setSongsList] = useState("");
  const [addSong, setAddSong] = useState("");

  useEffect(() => {
    setSongsList(savedPlaylist.playlist);
  }, [savedPlaylist]);

  props = {
    ...props,
    songsList,
    setSongsList,
    addSong,
    setAddSong,
    download,
  }

  return (
    <>
      <SearchBar {...props} />
      <Sort {...props} />
      {addSong && <AddToPlaylist {...props}/>}
      <Songs {...props} />
    </>
  )
}

const mapStateToProps = state => ({
  savedPlaylist: state.savedPlaylistReducers,
  customisePlaylist: state.customisePlaylistReducers,
  playing: state.playingReducers,
  utils: state.utilsReducers
});

const mapDispatchToProps = {
  playingSelectPlaylist,
  savedPlaylistGetSongs,
  savedPlaylistRemove,
  utilsDownloadOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPlaylist);
