// server/models/db.js
import mongoose from 'mongoose';

// Połącz się z bazą danych MongoDB
mongoose.connect('mongodb://localhost/my-mmorpg-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Obsługa błędów połączenia
mongoose.connection.on('connected', () => {
  console.log('Połączono z MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Błąd połączenia z MongoDB:', err);
});

// Eksportuj połączenie MongoDB
export default mongoose.connection;
