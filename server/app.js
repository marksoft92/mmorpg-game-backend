import express from 'express';
import http from 'http';
import { Server as socketIo } from 'socket.io';
import {setupCharacterWebSocket} from './socketController/socketCharacterController.js';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);

// Rozpocznij serwer na określonym porcie
const port =  3003;
server.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

io.on('connection', (socket) => {
    console.log('Nowe połączenie WebSocket');
    setupCharacterWebSocket(socket, io);
    
      socket.on('disconnect', () => {
        console.log('Rozłączenie WebSocket');
      });

    socket.on('disconnect', () => {
      console.log('Rozłączenie WebSocket');
    });
  });
  

  