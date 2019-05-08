'use strict';
import React, {Component} from 'react'; 

export default class PostCard extends Component {
  render() {
    return e(
               <div class="card-stacked">
             <div class="card-content">
               <p id="user">{this.props.name} posted:</p>
               <p>I am a very simple card. I am good at containing small bits of information.</p>
             </div>
             <div class="card-action">
               <a href="#">Leave a comment...</a>
             </div>
           </div>
         
    );
  }
  }



  ReactDOM.render(
    <PostCard name="Steve" />,
    document.getElementById('#react-posts-div')
  );