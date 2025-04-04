const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // "Grilled Salmon"
    prepTime: { type: Number, required: true }, // 15 (minutes)
    cookTime: { type: String, required: true }, // 20 (minutes)
    serves: { type: String, required: true }, // 4
    nutritions: { type: [String], default: [] }, // ["350 calories"]
    tags: { type: [String], default: [] }, // ["Healthy", "Protein-Rich"]
    image: { data: Buffer, contentType: String,},
    rate: { type: mongoose.Types.ObjectId, ref: "Rating" }, // Reference to ratings
    ingredients: {type: [String],default:[]},
    directions: {type: [String]},
    addDiscription: {type: String},
    tips: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);