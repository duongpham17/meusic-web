import React from 'react';

import useOpen from 'hooks/useOpen';

import {connect} from 'react-redux';

import { previewGetSongs } from 'redux/actions/previewPlaylistActions';
import { previewGetTotalSongs } from 'redux/actions/previewPlaylistActions';

import Overview from './overview';
import Sort from './sort';

export const Filter = (props) => {

  const {onOpen, open} = useOpen();

  props = {
    ...props,
    onOpen,
    open
  };

  return (
    <>
      <Overview {...props} />
      <Sort {...props} />
    </>
  )
}
const mapStateToProps = state => ({
  previewPlaylistReducers: state.previewPlaylistReducers,
});

const mapDispatchToProps = {
  previewGetTotalSongs,
  previewGetSongs
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)