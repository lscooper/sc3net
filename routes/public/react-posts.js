'use strict';
// var Posts = require("../models/Post.js");
const e = React.createElement;

class PostCard extends React.Component {

// state ={ Posts };

  render() {
    return (
  
      
      e(
        "div", 
        {className: "card-stacked"}, 

        e(
          "div", 
          {className: "card-content"},

           e(
             "p", 
             {id: "user-posted"}, 
             "Steve posted:"
            ), 
            e(
              "p", 
              null, 
              "I am SO EXCITED about my upcoming trip to Italy!"
            )
        ), 
        e(
          "div", 
          {className: "card-comments"}, 
          e(
            "a", 
            {href: "#"}, 
            "Leave a comment..."
          )
          
        )
        
      )
      
      
    );

  }
}

const domContainer2 = document.querySelector('#react-posts-div');
ReactDOM.render(e(PostCard), domContainer2);