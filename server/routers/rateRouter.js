const express = require("express")
const  {
  createRating,
  getRatingsForRecipe,
  updateRating,
  deleteRating,
  getAverageRating,
} = require ('../controllers/rateController');

const rateRouter = express.Router();

rateRouter.post('/post', createRating);
rateRouter.get('/:recipeId/ratings', getRatingsForRecipe);
rateRouter.put('/:ratingId', updateRating);
rateRouter.delete('/:ratingId', deleteRating);
rateRouter.get('/:recipeId/average', getAverageRating);


module.exports = rateRouter;

