import React from 'react';
import{connect} from 'react-redux'
import { closeForm } from '../util/post_form_util';
import { Link, withRouter } from 'react-router-dom';

class PostDropdown extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    document.getElementById('PostDropdown').style.display = 'none';
  }

  render() {
    let here = this.props.location.pathname
    return (
    <div id="PostDropdown">
      <Link to={`${here}/post/text`}><div>Text Post</div></Link>
      <Link to={`${here}/post/quote`}><div>Quote Post</div></Link>
      <Link to={`${here}/post/image`}><div>Image Post</div></Link>
      <Link to={`${here}/post/video`}><div>Video Post</div></Link>
      <Link to={`${here}/post/audio`}><div>Audio Post</div></Link>
      <Link to={`${here}/post/link`}><div>Link Post</div></Link>

    </div>
  )}
}

export default withRouter(connect(null, null)(PostDropdown));
