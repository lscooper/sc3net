'use strict';
var _posts = _interopRequireDefault(require("../../posts.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const e = React.createElement;

class PostCard extends React.Component {

  state ={ posts };

  render() {
    return (
  
      
      e(
        "div", 
        {class: "card-stacked"}, 

        e(
          "div", 
          {class: "card-content"},

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
          {class: "card-action"}, 
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


// ReactDOM.render(
//   <PostCard name="Steve" />,
//   document.getElementById('#like_button_container')
// );

const domContainer2 = document.querySelector('#react-posts-div');
ReactDOM.render(e(PostCard), domContainer2);