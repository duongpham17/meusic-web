import { useEffect, useState } from 'react';

import { socket } from 'utils/socket';

export const Join = (data) => {

    const [value] = useState(data);

    useEffect(() => {
  
        socket.emit("joinRoom", value);

        return () => {
            socket.emit("leaveRoom", value);
            socket.disconnect();
        };

    }, [value]);

  return socket;
}

export default Join