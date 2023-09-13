// server/app.js
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Połącz się z bazą danych MongoDB
mongoose.connect('mongodb://localhost/my-mmorpg-database', {
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
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

// server/app.js (kontynuacja)
io.on('connection', (socket) => {
    console.log('Nowe połączenie WebSocket');
  
    // Obsługa wydarzeń WebSocket
  
    socket.on('disconnect', () => {
      console.log('Rozłączenie WebSocket');
    });
  });
  
  // ... reszta konfiguracji Express ...
  