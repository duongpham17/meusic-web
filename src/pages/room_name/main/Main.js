import styles from './Main.module.scss';
import React from 'react';

import { useJoinSocket, useOnSocket, useEmitSocket } from '../socket';

import Users from './users';
import Audio from './audio';
import Songs from './songs';

const Main = (props) => {

  const [room, user] = [props.room.room, props.user.user];

  const data = {room, user};

  const socket = useJoinSocket(data);

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