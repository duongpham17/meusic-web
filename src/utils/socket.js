import io from 'socket.io-client';

const url = process.env.NODE_ENV === "production" ? process.env.REACT_APP_PRODUCTION_PORT_API : process.env.REACT_APP_DEVELOPMENT_PORT_API;

const connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity",
};

export const socket = io(url, connectionOptions);

export default socket 