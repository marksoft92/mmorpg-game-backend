// server/app.js
import express from 'express';
import http from 'http';
//import socketIo from 'socket.io';
import { Server as socketIo } from 'socket.io';

import mongoose from 'mongoose';
import { updateCharacter } from './controllers/characterController.js';
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

// server/app.js (kontynuacja)
io.on('connection', (socket) => {
    console.log('Nowe połączenie WebSocket');
  



    socket.on('updateCharacter', async (data) => {
        console.log(data);
        try {
          // Przyjmujemy dane, które zawierają ID postaci i nowe dane
          const { characterId, newData } = data;
    
          // Wywołujemy kontroler do aktualizacji danych postaci
          const updatedCharacter = await updateCharacter(characterId, newData);
    
          // Wysyłamy zaktualizowane dane postaci do wszystkich klientów
          io.emit('characterUpdated', updatedCharacter);
        } catch (error) {
          console.error('Błąd aktualizacji postaci:', error);
        }
      });
    
      socket.on('disconnect', () => {
        console.log('Rozłączenie WebSocket');
      });






    // Obsługa wydarzeń WebSocket
  
    socket.on('disconnect', () => {
      console.log('Rozłączenie WebSocket');
    });
  });
  
  // ... reszta konfiguracji Express ...
  