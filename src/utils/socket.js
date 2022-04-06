import io from 'socket.io-client';

const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_PRODUCTION_PORT : process.env.REACT_APP_DEVELOPMENT_PORT;

const connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity",               
    "transports" : ["websocket"]
};

export const socket = io(url, connectionOptions);

export default socket 