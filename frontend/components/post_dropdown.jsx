import React from 'react';


class PostDropdown extends React.Component {

  showTextPost(e){
    e.preventDefault();

    let postForm = document.getElementById('TextPostForm');

    if (postForm.style.display === ""){
      postForm.style.display = 'flex';
    } else {
      postForm.style.display = '';
    }
  }

  render() {
    return(
    <div id="PostDropdown">
      <button onClick={this.showTextPost.bind(this)}>Text Post</button>
    </div>
  )}
}

export default PostDropdown;
