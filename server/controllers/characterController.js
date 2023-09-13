// server/controllers/characterController.js
import Character from '../models/character';

// Funkcja do aktualizacji danych postaci
const updateCharacter = async (characterId, newData) => {
  try {
    // Znajdź postać w bazie danych na podstawie ID
    const character = await Character.findById(characterId);

    if (!character) {
      throw new Error('Postać nie znaleziona');
    }

    // Aktualizuj dane postaci na podstawie przekazanych danych
    character.level = newData.level;
    character.experience = newData.experience;
    character.health = newData.health;
    character.stats.agility = newData.stats.agility;
    character.stats.vitality = newData.stats.vitality;

    // Zapisz zaktualizowaną postać
    await character.save();

    return character; // Zwróć zaktualizowaną postać
  } catch (error) {
    throw error;
  }
};

export { updateCharacter };
