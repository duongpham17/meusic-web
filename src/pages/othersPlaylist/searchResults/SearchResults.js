import styles from './SearchResults.module.scss';
import React from 'react';
import {connect} from 'react-redux';
import defaultImage from 'assets/logo.webp';

import {othersPlaylistSave, othersPlaylistClear} from 'redux/actions/othersPlaylistActions';

const SearchResults = (props) => {

    const {othersPlaylistSave, othersPlaylistClear} = props;

    const {search} = props.othersPlaylistReducers;

    return ( !!search.length &&
        <div className={styles.container}>

            <header>
                <b>SEARCH RESULTS {search.length}</b> 
                <button onClick={othersPlaylistClear}>Clear</button>
            </header>

            <div className={styles.map}>
                {search.map(el => 
                    <div key={el._id} className={styles.element} onClick={() => othersPlaylistSave(el._id)}>
                        <img src={el.image || defaultImage} alt="cover"/>
                        <p className={styles.information}>
                            <span>{el.name}</span>
                            <br/>
                            <small>Songs {el.songs}</small>
                        </p>
                    </div>  
                )}
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    othersPlaylistReducers: state.othersPlaylistReducers
});

const mapDispatchToProps = {
    othersPlaylistSave,
    othersPlaylistClear
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)