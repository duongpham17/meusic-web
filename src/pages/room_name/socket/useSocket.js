import { useEffect, useState } from 'react';
import { socket } from 'utils/socket';

export const useSocket = (data) => {

    const [value] = useState(data);

    useEffect(() => {
  
        socket.emit("joinRoom", value);

        socket.open();

        return () => {
            socket.emit("leaveRoom", value);
            socket.disconnect();
        };

    }, [value]);

  return socket;
}

export default useSocket