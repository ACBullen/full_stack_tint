import React from 'react';
import { closeForm } from '../util/post_form_util';
import { Link } from 'react-router-dom';

class PostDropdown extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    document.getElementById('PostDropdown').style.display = 'none';
  }

  render() {
    return (
    <div id="PostDropdown">
      <Link to="/post/text"><button type="button">Text Post</button></Link>
      <Link to="/post/quote"><button type="button">Quote Post</button></Link>
      <Link to="/post/image"><button type="button">Image Post</button></Link>
      <Link to="/post/video"><button type='button'>Video Post</button></Link>
      <Link to="/post/audio"><button type='button'>Audio Post</button></Link>
      <Link to="/post/link"><button type='button'>Link Post</button></Link>
    </div>
  )}
}

export default PostDropdown;
