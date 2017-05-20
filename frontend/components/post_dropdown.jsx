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
      <Link to={`${here}/post/text`}><button type="button">Text Post</button></Link>
      <Link to={`${here}/post/quote`}><button type="button">Quote Post</button></Link>
      <Link to={`${here}/post/image`}><button type="button">Image Post</button></Link>
      <Link to={`${here}/post/video`}><button type='button'>Video Post</button></Link>
      <Link to={`${here}/post/audio`}><button type='button'>Audio Post</button></Link>
      <Link to={`${here}/post/link`}><button type='button'>Link Post</button></Link>

    </div>
  )}
}

export default withRouter(connect(null, null)(PostDropdown));
