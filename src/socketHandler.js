import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
export const socket = io(ENDPOINT);
