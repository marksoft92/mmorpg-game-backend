// server/models/character.js
import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  _id: Number,
  class: String,
  level: Number,
  experience: Number,
  health: Number,
  stats: {
    agility: Number,
    vitality: Number,
  },
});

const Character = mongoose.model('Character', characterSchema, 'character');

export default Character;
