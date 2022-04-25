import React, {useEffect, useState, lazy, Suspense} from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from 'redux/actions/alertActions';
import { roomGet, roomCheckPassword, roomClearError, roomSearchSong } from 'redux/actions/roomActions';
import { customisePlaylistGet } from 'redux/actions/customisePlaylistActions';
import { playingClear } from 'redux/actions/playingActions';

import Nothing from './nothing';
import Password from './password';

const LazyMain = lazy(() => import('./main'));

const Room = (props) => {

  const {roomGet, playingClear} = props;

  const {room} = props.roomReducers;

  const {user} = props.userReducers;

  const [verified, setVerified] = useState("");

  const params = useParams();

  useEffect(() => {
    (async () => {
      const room = await roomGet(params.room);

      const isAdmin = room.admin === user._id;
      if(isAdmin) return setVerified(true);

      const isPublic = !room.private;
      if(isPublic) return setVerified(true);

      const isVerified = room.verified.includes(user._id);
      return isVerified ? setVerified(true) : setVerified(false);
    })();
  }, [roomGet, params.room, user._id]);

  useEffect(() => {
    playingClear();
    localStorage.removeItem("trackCycle");
  }, [playingClear]);

  props = {
    ...props,
    verified,
    setVerified,
    params,
  };

  return ( !room ? <div className="loading" /> : room === "nothing" ? <Nothing/> : 
    <>

      { room.private && !verified && 
        <Password {...props} /> 
      }

      { verified &&
        <Suspense fallback={<div className="loading" />}>
          <LazyMain {...props}/>
        </Suspense>
      }
      
    </>
  );
};

const mapStateToProps = state => ({
  roomReducers: state.roomReducers,
  userReducers: state.userReducers,
  savedPlaylistReducers: state.savedPlaylistReducers,
  customisePlaylistReducers: state.customisePlaylistReducers
})

const mapDispatchToProps = {
  roomGet,
  roomCheckPassword,
  roomClearError,
  roomSearchSong,
  playingClear,
  customisePlaylistGet,
  setAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)