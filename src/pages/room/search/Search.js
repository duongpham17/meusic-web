import React from 'react';

import SearchBar from 'components/searchBar';
import useDelayFetch from 'hooks/useDelayFetch';

const Search = (props) => {

    const {roomSearchRoom} = props;

    const {value, onClear, loading, onChange} = useDelayFetch(roomSearchRoom);

    return (
        <SearchBar placeholder='Search rooms' value={value} onClear={onClear} onChange={onChange} loading={loading} />
    )
};

export default Search