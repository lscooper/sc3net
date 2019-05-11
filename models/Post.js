var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
//post has a user who created it and the text that it consists of
    author: String,

    authorPicture: String,

    text: String
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
