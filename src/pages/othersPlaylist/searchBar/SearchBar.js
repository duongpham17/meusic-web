import React from 'react';

import {connect} from 'react-redux';
import {othersPlaylistSearch} from 'redux/actions/othersPlaylistActions';

import Search from 'components/searchBar';

import useDelayFetch from 'hooks/useDelayFetch';

export const SearchBar = ({othersPlaylistSearch}) => {

  const {value, loading, onChange, onClear} = useDelayFetch(othersPlaylistSearch);

  return (
    <Search value={value} loading={loading} onChange={onChange} onClear={onClear}  />
  )
}

const mapDispatchToProps = {
  othersPlaylistSearch
}

export default connect(null, mapDispatchToProps)(SearchBar);