const express = require("express")
const formidable = require("express-formidable")
const {createProfile,getProfile,profileImage} = require("../controllers/foodProfileController");


const foodProfileRouter = express.Router();

foodProfileRouter.post("/post",formidable(),createProfile);
foodProfileRouter.get("/get",getProfile);
foodProfileRouter.get("/image/:id",profileImage);

module.exports = foodProfileRouter;