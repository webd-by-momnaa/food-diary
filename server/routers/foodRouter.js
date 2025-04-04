const express = require("express")
const formidable = require("express-formidable")
const { createRecipe, getRecipe, getAllRecipe,recipeImage, searchFood,updateRecipe, recipeSingle, latestRecipe, latestTwo} = require("../controllers/foodController");

const foodRouter = express.Router();

foodRouter.post("/post", 
    formidable(), 
    createRecipe
);
foodRouter.get("/get", getRecipe);
foodRouter.get("/complete", getAllRecipe);
foodRouter.get("/image/:id", recipeImage);
foodRouter.get("/single/:id", recipeSingle);
foodRouter.put("/put/:id", 
formidable(),
updateRecipe
);
foodRouter.get("/latest", latestRecipe);
foodRouter.get("/latestTwo", latestTwo);
foodRouter.get("/search/:keyword",  searchFood);
module.exports = foodRouter;