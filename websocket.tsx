// websocket.ts
// import WebSocket from 'react-native-websocket';

const ipAddress = '127.0.0.1';
const port = '1880';
const websocketUrl = `ws://${ipAddress}:${port}`;

const ws = new WebSocket(websocketUrl);

ws.onopen = () => {
  console.log('WebSocket Connected');
};

ws.onmessage = (e) => {
  console.log('Message from server: ', e.data);
};

ws.onerror = (e) => {
  console.log('WebSocket Error: ', e.message);
};

ws.onclose = (e) => {
  console.log('WebSocket Closed: ', e.code, e.reason);
};

const sendCommand = (command: string) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(command);
  } else {
    console.log('WebSocket is not open');
  }
};

export default {
  sendCommand,
};
