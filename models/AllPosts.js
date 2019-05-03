var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AllPostsSchema = new Schema({

name: {
    type: String,
    unique: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ]


   
});

var AllPosts = mongoose.model("AllPosts", AllPostsSchema);

module.exports = AllPosts;