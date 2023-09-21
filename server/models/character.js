// server/models/character.js
import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  _id: Number,
  class: String,
  name: String,
  level: Number,
  experience: Number,
  health: Number,
  location: String,
  stats: {
    agility: Number,
    vitality: Number,
    strength: Number,
    energy: Number
  },
});

const Character = mongoose.model('Character', characterSchema, 'character');

export default Character;
