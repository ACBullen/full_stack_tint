import React from 'react';
import { closeForm } from '../util/post_form_util';
import { Link } from 'react-router-dom';

class PostDropdown extends React.Component {

  render() {
    return (
    <div id="PostDropdown">
      <Link to="/post/text"><button type="button">Text Post</button></Link>
      <Link to="/post/quote"><button type="button">Quote Post</button></Link>
      <Link to="/post/image"><button type="button">Image Post</button></Link>
    </div>
  )}
}

export default PostDropdown;
