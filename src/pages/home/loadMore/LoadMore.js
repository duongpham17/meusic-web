import styles from './LoadMore.module.scss';
import React, {useState} from 'react';
import useQuery from 'hooks/useQuery';
import { connect } from 'react-redux';
import { previewGetSongs } from 'redux/actions/previewPlaylistActions';

const More = (props) => {

    const {previewGetSongs} = props;

    const {playlist} = props.previewPlaylistReducers;

    const {setQuery, getQueryValue} = useQuery();

    const [loading, setLoading] = useState(false);

    const onLoadMore = async () => {
        const limit = Number(getQueryValue("limit")) + 100;
        setQuery("limit", limit);
        setLoading(true);
        await previewGetSongs();
        setLoading(false)
    };

    return ( playlist && playlist.length >= (getQueryValue("limit") || 50) &&
        <div className={styles.container}>
            {!loading && <button onClick={onLoadMore}>Load more</button>}
            {loading && <div className='loading-30 center' />}
        </div>
    )
};

const mapStateToProps = state => ({
    previewPlaylistReducers: state.previewPlaylistReducers
});

const mapDispatchToProps = {
    previewGetSongs
};

export default connect(mapStateToProps, mapDispatchToProps)(More)