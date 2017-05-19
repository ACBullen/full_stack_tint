import React from 'react';
import PostFormContainer from './post_form_container'
import { Link } from 'react-router-dom';


class LinkPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'link',
      media_type: '',
      user_id: this.props.userId
    };
  }

  componentWillMount(){
    this.props.requestCloudinaryKeys();
  }

  render(){
    return (
      <div id="LinkPostForm" className="baseLozenge">
        <form id="LinkPostInputs">
        <input type="text" placeholder="Link content here" />
        <input type="text" placeholder="Give the link a description" />
        <div id="controlButtons">
          <Link to='/'><button type="button">Close</button></Link>
          <button onClick={this.handleSubmit} type="button">Post</button>
        </div>
        </form>
      </div>
    )
  }
}

export default PostFormContainer(LinkPostForm);
