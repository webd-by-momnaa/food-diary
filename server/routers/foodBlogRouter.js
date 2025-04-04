const express = require("express")
const formidable = require("express-formidable")
const {createBlog, getBlog, blogImage, updateBlog,blogCatogry,blogSingle,blogRecipe} = require("../controllers/foodBlogController");


const foodBlogRouter = express.Router();

foodBlogRouter.post("/post",formidable(),createBlog);
foodBlogRouter.get("/get",getBlog);
foodBlogRouter.get("/blog",blogRecipe);
foodBlogRouter.get("/image/:id",blogImage);
foodBlogRouter.put("/put/:id",formidable(),updateBlog);
foodBlogRouter.get("/oncateg/:categ",blogCatogry);
foodBlogRouter.get("/single/:id",blogSingle);


module.exports = foodBlogRouter;