const Blog = require("../models/foodBlogModel");
const fs = require("fs");


const createBlog = async(req, res) =>{
    try {
        const {title,subTitle,description,profileCard,descriptionOne,descriptionTwo, descriptionThree, extraDescription, catogries} = req.fields || {};
        const {image} = req.files || {};
        if(!title || !subTitle ||!description ||!profileCard){
            return res.status(400).json({
                error: "All fields are required"
            });
        }
        if(!image){
            return res.status(400).json({error:"Image is required."});
        }
        const allowedTypes = ["image/png", "image/jpeg"];
        if(!allowedTypes.includes(image.type)){
            return res.status(400).json({ error: "Invalid image type. Only JPEG and PNG are allowed." });
          }

          const newBlog = new Blog ({...req.fields});
          if(image){
            newBlog.image.data = fs.readFileSync(image.path);
            newBlog.image.contentType = image.type;
          }
          await newBlog.save();
          res.status(201).json({message:"Blog Created Successfully", blog: newBlog})
    } catch (error) {
        res.status(500).json({ message: "Error creating recipe", error: error.message });
    }
};

//get blog
const getBlog = async(req, res) => {
 try {
     const data = await Blog.find().select("-image").populate("profileCard").limit(1).sort({createdAt:-1})
     res.status(200).send(data)
 } catch (error) {
  res.status(400).send({error : "an error occured while getting Blog"})
 }
};
//recipe image
const blogImage = async(req, res) => {
 try {
  const blog = await Blog.findById(req.params.id).select("image");
  if(!Blog || !blog.image ||!blog.image.data ){
    return res.status(404).send({success :false , message:"Image not found"})
  }
  res.set("Content-Type",blog.image.contentType);
  res.status(200).send(blog.image.data);

 } catch (error) {
  res.status(500).send({success: false, message:"Server error",error: error.message})

 }
};
// single blog
const blogSingle = async (req, res) => {
  try {
    // Fetch the recipe by ID, excluding the "image" field
    const blog = await Blog.findById(req.params.id).select("-image");
    if (!blog) {
      return res.status(404).send({ success: false, message: "Blog not found" });
    }

    // Fetch the rating associated with this recipe ID
    const profileCard = await profileCard.findOne({ blogId: blog._id }).populate("name");

    // Send both recipe and rating data in the response
    res.status(200).send({ success: true, blog, profileCard });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//updateRecipe
 const updateBlog = async (req, res) =>{
  try {
       const {title,subTitle,description,profileCard,descriptionOne,descriptionTwo, descriptionThree, extraDescription, catogries} = req.fields;
       const {image} = req.files

       const updateBlog = await Blog.findByIdAndUpdate(req.params.id, {...req.fields}, {new:true})
       if(image && image.path){
        updateBlog.image.data = fs.readFileSync(image.path);
        updateBlog.image.contentType = image.type
       }
       await updateBlog.save()
       res.status(200).send(updateBlog)
  } catch (error) {
    console.error("Error updating Blog:", error.message);
    res.status(500).json({ error: "An error occurred while updating the blog." });
  }
 };
 const blogCatogry = async (req, res) => {
  try {
    // Use `req.params.categ` to match blogs by category (correcting the field name)
    const data = await Blog.find({ catogries: req.params.categ }).select("-image");

    // Check if data exists
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No blogs found for the specified category." });
    }

    // Return the matched blogs
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching blogs by category." });
  }
};

 const blogRecipe = async(req, res) => {
  try {
      const data = await Blog.find().select("-image").sort({createdAt:-1}).limit(6)
      res.status(200).send(data)
  } catch (error) {
   res.status(400).send({error : "an error occured while getting Blog"})
  }
};

module.exports = {createBlog,getBlog,blogImage,updateBlog,blogCatogry,blogSingle,blogRecipe};