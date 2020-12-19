const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postModel = {
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
};

const PostSchema =new Schema(postModel);
module.exports = mongoose.model("posts", PostSchema);