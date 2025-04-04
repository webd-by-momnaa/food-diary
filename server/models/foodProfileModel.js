const mongoose = require ("mongoose");


const profileSchema = new mongoose.Schema({
    
    image:{data: Buffer, contentType: String},
    name:{type:String, required:true},
    work:{type:String, required:true},
    description:{type:String,required:true}
})

module.exports = mongoose.model("Profile",profileSchema);