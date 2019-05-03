'use strict';
var React = require('react/addons');
const e = React.createElement;

 class LikeButton extends React.Component {
   constructor(props) {
    super(props);
    
  }

  render() {
    if (this.state.liked) {
      
      <div>AAAAAH</div>
      return 'You liked this.';
    }

    
//Should pull all posts from the database and display them in reverse chronological order
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}










//DO NOT CHANGE THIS
//const domContainer = document.querySelector('#react-posts-container');
//Change LikeButton to actual name of class
//ReactDOM.render(e(FriendCard), domContainer);
//ReactDOMServer.renderToString(FriendCard)