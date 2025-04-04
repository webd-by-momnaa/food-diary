const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema(
    {
        title: {type:String , required:true},
        subTitle: {type:String ,  required:true},
        image: {data: Buffer, contentType: String},
        description:{type:String},
        descriptionOne: {type: [String],default:[]},
        descriptionTwo: {type: [String]},
        descriptionThree: {type: [String], default:[]},
        extraDescription: {type: [String], default:[]},
        catogries: {type: String, required:true},
        profileCard:{ type: mongoose.Types.ObjectId, ref: "Profile" }
    },
    { timestamps: true}
);

module.exports = mongoose.model("Blog",blogSchema);