import React from 'react';
import { closeForm } from '../util/post_form_util';

class PostDropdown extends React.Component {
  constructor(props){
    super(props)
    this.closeText = closeForm.bind(this)("TextPostForm");
    this.closeQuote = closeForm.bind(this)("QuotePostForm");

    this.showText = this.showPostForm.bind(this)("TextPostForm");
    this.showQuote = this.showPostForm.bind(this)("QuotePostForm");
  }

  showPostForm (name) {
    let that = this;
    return (e) =>{
      e.preventDefault();

      let postForm = document.getElementById(name);

      if (postForm.style.display === "none" || postForm.style.display === ''){
        this.closeText(e);
        this.closeQuote(e);
        postForm.style.display = 'flex';
      } else {
        postForm.style.display = 'none';
      }

      let dropdown = document.getElementById("PostDropdown");
      dropdown.style.display = "none";
    }
  }

// showQuotePost(e){
//   e.preventDefault();
//
//   let postForm = document.getElementById("QuotePostForm");
//
//   if (postForm.style.display === "none"){
//     this.closeText(e);
//     postForm.style.display = 'flex';
//   } else{
//     postForm.style.display = "none";
//   }
// }

  render() {
    return(
    <div id="PostDropdown">
      <button onClick={this.showText}>Text Post</button>
      <button onClick={this.showQuote}>Quote Post</button>
    </div>
  )}
}

export default PostDropdown;
