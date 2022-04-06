import React, {useState} from 'react';

import { connect } from 'react-redux';

import { 
    customisePlaylistGet, customisePlaylistUpdate, 
    customisePlaylistCreate, customisePlaylistDelete, 
    customisePlaylistDuplicate, customisePlaylistReorder 
} from 'redux/actions/customisePlaylistActions';

import { playingSelectPlaylist } from 'redux/actions/playingActions';

import Settings from './settings/Settings';
import Total from './total';
import Playlists from './playlists';

import useApiGet from 'hooks/useApiGet';

export const Custom = (props) => {

    const {customisePlaylistGet, customisePlaylist} = props;

    const [reorder, setReorder] = useState(false);

    useApiGet(customisePlaylistGet, customisePlaylist.playlist);
    
    props = {
        ...props,
        reorder,
        setReorder
    }

    return ( !customisePlaylist.playlist ? <div className='loading' /> :
        <>
            
            <Settings {...props} />

            <Total {...props} />

            <Playlists {...props} />
            
        </>
    );
};

const mapStateToProps = state => ({
    playing: state.playingReducers,
    customisePlaylist: state.customisePlaylistReducers,
    savedPlaylist: state.savedPlaylistReducers,
});

const mapDispatchToProps = {
    customisePlaylistGet,
    customisePlaylistUpdate,
    customisePlaylistCreate,
    customisePlaylistDelete,
    customisePlaylistDuplicate,
    customisePlaylistReorder,
    playingSelectPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);
