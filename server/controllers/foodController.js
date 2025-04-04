const Food = require("../models/foodModel");
const fs = require("fs");
const Rate = require("../models/rateModel")

const createRecipe = async (req, res) => {
  try {
    const { title, prepTime, cookTime, serves, nutritions, tags, rate, ingredients, directions, addDiscription, tips } = req.fields || {};
    const { image } = req.files || {};

  
    if (!title || !prepTime || !cookTime || !serves || !nutritions || !tags) {
      return res.status(400).json({
        error: "All fields (title, prepTime, cookTime, serves, nutritions, tags) are required.",
      });
    }

    if (!image) {
      return res.status(400).json({ error: "Image field is required." });
    }

    
    const allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(image.type)) {
      return res.status(400).json({ error: "Invalid image type. Only JPEG and PNG are allowed." });
    }

    // Create recipe
    const newFood = new Food({
      ...req.fields,
    });

    if (image) {
      newFood.image.data = fs.readFileSync(image.path);
      newFood.image.contentType = image.type;
    }

    await newFood.save();
    res.status(201).json({ message: "Recipe created successfully", recipe: newFood });
  } catch (error) {
    res.status(500).json({ message: "Error creating recipe", error: error.message });
  }
};
 //get recipe
const getRecipe = async(req, res) => {
 try {
     const data = await Food.find().select("-image").populate("rate").limit(3)
     res.status(200).send(data)
 } catch (error) {
  res.status(400).send({error : "an error occured while getting fooditems"})
 }
};

const getAllRecipe = async(req, res) => {
  try {
      const data = await Food.find().select("-image")
      res.status(200).send(data)
  } catch (error) {
   res.status(400).send({error : "an error occured while getting flower"})
  }
 };
//recipe image
const recipeImage = async(req, res) => {
 try {
  const food = await Food.findById(req.params.id).select("image");
  if(!Food || !food.image ||!food.image.data ){
    return res.status(404).send({success :false , message:"Image not found"})
  }
  res.set("Content-Type",food.image.contentType);
  res.status(200).send(food.image.data);

 } catch (error) {
  res.status(500).send({success: false, message:"Server error",error: error.message})

 }
};

// single recipe
const recipeSingle = async (req, res) => {
  try {
    // Fetch the recipe by ID, excluding the "image" field
    const food = await Food.findById(req.params.id).select("-image");
    if (!food) {
      return res.status(404).send({ success: false, message: "Recipe not found" });
    }

    // Fetch the rating associated with this recipe ID
    const rate = await Rate.findOne({ recipeId: food._id }).populate("userId");

    // Send both recipe and rating data in the response
    res.status(200).send({ success: true, food, rate });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//updateRecipe
 const updateRecipe = async (req, res) =>{
  try {
       const {title, prepTime, cookTime, serves, nutritions, tags, rate,  ingredients, directions, addDiscription, tips} = req.fields;
       const {image} = req.files

       const updateRecipe = await Food.findByIdAndUpdate(req.params.id, {...req.fields}, {new:true})
       if(image && image.path){
        updateRecipe.image.data = fs.readFileSync(image.path);
        updateRecipe.image.contentType = image.type
       }
       await updateRecipe.save()
       res.status(200).send(updateRecipe)
  } catch (error) {
    console.error("Error updating recipe:", error.message);
    res.status(500).json({ error: "An error occurred while updating the recipe." });
  }
 };
 const latestRecipe = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const pageSize = parseInt(req.query.pageSize) || 6; // Default to 6 items per page
    const skip = (page - 1) * pageSize;

    const data = await Food.find()
      .select("-image")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize);

    const totalRecipes = await Food.countDocuments();

    res.status(200).send({
      recipes: data,
      totalRecipes,
      totalPages: Math.ceil(totalRecipes / pageSize),
      currentPage: page,
    });
  } catch (error) {
    res.status(400).send({ error: "An error occurred while getting recipes" });
  }
};

 const latestTwo = async(req, res) => {
  try {
      const data = await Food.find().select("-image").sort({createdAt:-1}).limit(6)
      res.status(200).send(data)
  } catch (error) {
   res.status(400).send({error : "an error occured while getting recipe"})
  }
 };

 const searchFood = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const result = await Food.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { nutritions: { $regex: keyword, $options: "i" } },
        { tags: { $regex: keyword, $options: "i" } },
      ],
    }).select("-image"); // Exclude the `image` field if not required
    res.status(200).send({ data: result, total: result.length });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = { createRecipe, getRecipe, recipeImage, updateRecipe, recipeSingle,getAllRecipe, latestRecipe, latestTwo,searchFood  };
