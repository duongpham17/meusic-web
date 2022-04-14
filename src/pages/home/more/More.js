import styles from './More.module.scss';
import React, {useState} from 'react';
import useQuery from 'hooks/useQuery';
import { connect } from 'react-redux';
import { previewGetSongs } from 'redux/actions/previewPlaylistActions';

const More = (props) => {

    const {previewGetSongs, previewPlaylist} = props;

    const {setQuery, getQueryValue} = useQuery();

    const [loading, setLoading] = useState(false);

    const onLoadMore = async () => {
        const limit = Math.round(getQueryValue("limit") || 50) + 50; 
        setQuery("limit", limit);
        setLoading(true);
        await previewGetSongs();
        setLoading(false)
    };

    return ( previewPlaylist.songs &&
        <div className={styles.container}>
            {!loading && <button onClick={onLoadMore}>Load more</button>}
            {loading && <div className='loading-30 center' />}
        </div>
    )
};

const mapStateToProps = state => ({
    previewPlaylist: state.previewPlaylistReducers
});

const mapDispatchToProps = {
    previewGetSongs
};

export default connect(mapStateToProps, mapDispatchToProps)(More)