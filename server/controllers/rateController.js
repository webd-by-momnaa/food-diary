const Rating = require ("../models/rateModel")
const Food = require ("../models/foodModel")

// Create a new rating
  const createRating = async (req, res) => {
  const { recipeId, userId, rating} = req.body;
  const recipe = await Food.findById(recipeId);

  try {
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const existingRating = await Rating.findOne({ recipeId, userId });
    if (existingRating) {
      return res.status(400).json({ message: 'You have already rated this recipe' });
    }

    const newRating = new Rating({
      recipeId,
      userId,
      rating
    });

    await newRating.save();
    res.status(201).json({ message: 'Rating created successfully', rating: newRating });
  } catch (error) {
    res.status(500).json({ message: 'Error creating rating', error: error.message });
  }
};

// Get all ratings for a specific recipe
 const getRatingsForRecipe = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const ratings = await Rating.find({ recipeId }).populate('userId', 'name'); // Populate user details if needed
    if (!ratings || ratings.length === 0) {
      return res.status(404).json({ message: 'No ratings found for this recipe' });
    }
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving ratings', error: error.message });
  }
};

 const updateRating = async (req, res) => {
  const { ratingId } = req.params;
  const { rating } = req.body;

  try {
    const updatedRating = await Rating.findByIdAndUpdate(
      ratingId,
      { rating },
      { new: true }
    );

    if (!updatedRating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    res.status(200).json({ message: 'Rating updated successfully', rating: updatedRating });
  } catch (error) {
    res.status(500).json({ message: 'Error updating rating', error: error.message });
  }
};

 const deleteRating = async (req, res) => {
  const { ratingId } = req.params;

  try {
    const deletedRating = await Rating.findByIdAndDelete(ratingId);

    if (!deletedRating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    res.status(200).json({ message: 'Rating deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting rating', error: error.message });
  }
};

 const getAverageRating = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const ratings = await Rating.find({ recipeId });

    if (!ratings || ratings.length === 0) {
      return res.status(404).json({ message: 'No ratings found for this recipe' });
    }

    const averageRating =
      ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;

    res.status(200).json({ averageRating, totalRatings: ratings.length });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating average rating', error: error.message });
  }
};
 module.exports = {createRating, getRatingsForRecipe, updateRating, deleteRating, getAverageRating};