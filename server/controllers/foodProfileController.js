const { profile } = require("console");
const Profile = require("../models/foodProfileModel");
const fs = require("fs");
const createProfile = async(req, res) => {
try {
    const {name, work, description} = req.fields || {};
const {image} = req.files || {};

if(!name || !work || !description){
    return res.status(400).json({error:"All fields are required"})
}
if(!image){
    return res.status(4000).json({error:"Image is required"})
}
const allowedTypes = ["image/png", "image/jpeg"];
if (!allowedTypes.includes(image.type)) {
    return res.status(400).json({ error: "Invalid image type. Only JPEG and PNG are allowed." });
  }
  const newProfile = new Profile ({
    ...req.fields,
  });
    if (image) {
        newProfile.image.data = fs.readFileSync(image.path);
        newProfile.image.contentType = image.type;
      }
  
      await newProfile.save();
      res.status(201).json({ message: "Profile created successfully", profile: newProfile });
    } catch (error) {
      res.status(500).json({ message: "Error creating profile", error: error.message });
    } 
};
//get profile
const getProfile = async(req, res) => {
 try {
     const data = await Profile.find().select("-image").limit(3).populate('name');
     res.status(200).send(data)
 } catch (error) {
  res.status(400).send({error : "an error occured while getting Profile."})
 }
};
//profile image
const profileImage = async(req, res) => {
 try {
  const profile = await Profile.findById(req.params.id).select("image");
  if(!Profile || !profile.image ||!profile.image.data ){
    return res.status(404).send({success :false , message:"Image not found"})
  }
  res.set("Content-Type",profile.image.contentType);
  res.status(200).send(profile.image.data);

 } catch (error) {
  res.status(500).send({success: false, message:"Server error",error: error.message})

 }
};


module.exports = {createProfile, getProfile, profileImage};