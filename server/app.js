// server/app.js
import express from 'express';
import http from 'http';
//import socketIo from 'socket.io';
import { Server as socketIo } from 'socket.io';
import {setupCharacterWebSocket} from './socketController/socketCharacterController.js';
import mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);
const io = new socketIo(server);


// Połącz się z bazą danych MongoDB
mongoose.connect("mongodb+srv://<user>:<password>@rpg.colafm7.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Połączono z MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Błąd połączenia z MongoDB:', err);
});

// ... reszta konfiguracji Express ...

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


    // Obsługa wydarzeń WebSocket
  
    socket.on('disconnect', () => {
      console.log('Rozłączenie WebSocket');
    });
  });
  
  // ... reszta konfiguracji Express ...
  