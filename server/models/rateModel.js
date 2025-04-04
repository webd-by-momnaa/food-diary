const mongoose = require ('mongoose');

const ratingSchema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'auth',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  timestamp: {
    type: Date, default: Date.now,
  }
});

module.exports = mongoose.model('Rating', ratingSchema);