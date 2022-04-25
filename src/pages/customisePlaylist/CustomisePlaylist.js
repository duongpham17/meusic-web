import React from 'react';

import { connect } from 'react-redux';

import { 
    customisePlaylistGet, customisePlaylistUpdate, 
    customisePlaylistCreate, customisePlaylistDelete, 
    customisePlaylistDuplicate, customisePlaylistReorder,
    customisePlaylistRandomise,
} from 'redux/actions/customisePlaylistActions';

import { playingSelectPlaylist } from 'redux/actions/playingActions';

import Tools from './tools/Tools';
import Total from './total';
import Playlists from './playlists';

import useApiGet from 'hooks/useApiGet';
import useOpen from 'hooks/useOpen';

export const Custom = (props) => {

    const {customisePlaylistGet} = props;

    const {playlist} = props.customisePlaylistReducers;

    const {openValue, onOpenValue} = useOpen("");

    useApiGet(customisePlaylistGet, playlist);
    
    props = {
        ...props,
        openValue,
        onOpenValue
    }

    return ( !playlist ? <div className='loading' /> :
        <>
            
            <Tools {...props} />

            <Total {...props} />

            <Playlists {...props} />
            
        </>
    );
};

const mapStateToProps = state => ({
    playingReducers: state.playingReducers,
    customisePlaylistReducers: state.customisePlaylistReducers,
    savedPlaylistReducers: state.savedPlaylistReducers,
});

const mapDispatchToProps = {
    customisePlaylistGet,
    customisePlaylistUpdate,
    customisePlaylistCreate,
    customisePlaylistDelete,
    customisePlaylistDuplicate,
    customisePlaylistReorder,
    customisePlaylistRandomise,
    playingSelectPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(Custom);
