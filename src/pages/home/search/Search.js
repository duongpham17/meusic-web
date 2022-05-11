import styles from './Search.module.scss';
import React, {useState, useCallback} from 'react';

import {connect} from 'react-redux';
import {previewGetSongs} from 'redux/actions/previewPlaylistActions';

import SearchBar from 'components/searchBar';

import useQuery from 'hooks/useQuery';
import useDelayFetch from 'hooks/useDelayFetch';

import PreviousSearch from './PreviousSearch';

export const Search = (props) => {

    const {previewGetSongs}  = props;

    const {playlist} = props.previewPlaylistReducers;

    const {getQueryValue, setQuery, clearQuery} = useQuery();
    
    const {value, setValue, loading} = useDelayFetch(previewGetSongs, getQueryValue("title"));
    const [previousSearch, setPreviousSearch] = useState(localStorage.getItem("previousSearch") ? JSON.parse(localStorage.getItem("previousSearch")) : "");

    const onSet = useCallback((type, value) => {
        const newSet = new Set(previousSearch);

        if(newSet.size >= 13) newSet.clear();

        if(type === "add")    newSet.add(value.trim());
        if(type === "delete") newSet.delete(value);
        if(type === "clear")  newSet.clear();

        setPreviousSearch(newSet);
        localStorage.setItem('previousSearch', JSON.stringify([...newSet]));
    }, [previousSearch]);

    const onChange = (params) => (e) => {
        const {value} = e.target;
        setValue(value);
        const query = setQuery(params, value);
        if(value && value.length >= 3 && value.length <= 13 & playlist.length >= 1) onSet("add", value);
        localStorage.setItem('filtered', query);
        if(!value) previewGetSongs();
    };

    const onPreviousSearchValue = (params, value) => {
        setValue(value);
        setQuery(params, value);
    };

    const onClear = () => {
        setValue("");
        clearQuery();
        previewGetSongs();
        localStorage.removeItem('filtered');
    };

    props = {
        ...props,
        previousSearch,
        onSet,
        onPreviousSearchValue
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.searchBar}>
                <SearchBar value={value} loading={loading} onChange={onChange("title")} onClear={onClear} placeholder="Search all songs" />
            </div>
            
            <div>
                <PreviousSearch {...props} />
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    previewPlaylistReducers: state.previewPlaylistReducers,
});

const mapDispatchToProps = {
    previewGetSongs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);