import { io } from 'socket.io-client';
import {hostSocket} from "./APIRoutes";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? 'http://localhost:4050' : hostSocket;

export const socket = io(URL,{     // note changed URL here
    path: '/channel',
    autoConnect: false,
    transports: ['websocket'],
});
