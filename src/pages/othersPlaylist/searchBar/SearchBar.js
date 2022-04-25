import React from 'react';

import {connect} from 'react-redux';
import {othersPlaylistSearch} from 'redux/actions/othersPlaylistActions';

import Search from 'components/searchBar';

import useDelayFetch from 'hooks/useDelayFetch';

export const SearchBar = (props) => {

  const {othersPlaylistSearch} = props;

  const {value, loading, onChange, onClear} = useDelayFetch(othersPlaylistSearch);

  return (
    <Search value={value} loading={loading} onChange={onChange} onClear={onClear} placeholder="Seach other's playlists"  />
  )
}

const mapDispatchToProps = {
  othersPlaylistSearch
}

export default connect(null, mapDispatchToProps)(SearchBar);