import styles from './Main.module.scss';
import React from 'react';

import { useSocket, useOnSocket, useEmitSocket } from '../socket';

import Users from './users';
import Audio from './audio';
import Songs from './songs';

const Main = (props) => {

  const {room} = props.roomReducers;

  const {user} = props.userReducers;

  const data = {room, user};

  const socket = useSocket(data);

  const onSocket = useOnSocket(socket);

  const emitSocket = useEmitSocket(socket);

  props = {
    ...props,
    ...onSocket,
    ...emitSocket,
    socket
  }

  return (
    <div className={styles.container}>
      
      <Users {...props} />

      <Songs {...props} />
      
      <Audio {...props} />

    </div>
  )
}

export default Main