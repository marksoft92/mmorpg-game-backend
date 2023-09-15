import { updateCharacter } from '../controllers/characterController.js';

export const setupCharacterWebSocket = (socket, io) => {
socket.on('updateCharacter', async (data) => {
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
}