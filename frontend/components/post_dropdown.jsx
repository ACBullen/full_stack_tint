import React from 'react';
import { closeForm } from '../util/post_form_util';

class PostDropdown extends React.Component {
  constructor(props){
    super(props)
    this.closeText = closeForm.bind(this)("TextPostForm");
    this.closeQuote = closeForm.bind(this)("QuotePostForm");
    this.closeImage = closeForm.bind(this)("ImagePostForm");

    this.showText = this.showPostForm.bind(this)("TextPostForm");
    this.showQuote = this.showPostForm.bind(this)("QuotePostForm");
    this.showImage = this.showPostForm.bind(this)("ImagePostForm");
  }

  showPostForm (name) {
    let that = this;
    return (e) =>{
      e.preventDefault();

      let postForm = document.getElementById(name);

      if (postForm.style.display === "none" || postForm.style.display === ''){
        this.closeText(e);
        this.closeQuote(e);
        this.closeImage(e);
        postForm.style.display = 'flex';
      } else {
        closeForm.bind(this)(name)(e);
      }

      let dropdown = document.getElementById("PostDropdown");

    }
  }



  render() {
    return(
    <div id="PostDropdown">
      <button onClick={this.showText}>Text Post</button>
      <button onClick={this.showQuote}>Quote Post</button>
      <button onClick={this.showImage}>Image Post</button>
    </div>
  )}
}

export default PostDropdown;
