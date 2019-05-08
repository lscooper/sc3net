'use strict';
// var Posts = _interopRequireDefault(require("../../posts.json"));

// function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
             {id: "user"}, 
             "Steve posted:"
            ), 
            e(
              "p", 
              null, 
              "I am a very simple card. I am good at containing small bits of information."
            )
        ), 
        e(
          "div", 
          {className: "card-action"}, 
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