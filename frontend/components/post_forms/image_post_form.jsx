import React from 'react';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util';

class ImagePostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'image',
      user_id: this.props.userId
    };

    this.formName = "ImagePostForm";

    this.closeForm = closeForm.bind(this)(this.formName);
  }
  handleSubmit(e){
    e.preventDefault();
    if (this.link_url.length < 4){
      alert("please submit a valid link");
    } else {
      this.props.createPost(this.state).then(()=>this.closeForm(e));
    }
  }

  render(){
    return (
      <form id={this.formName} className="baseLozenge">
        <input type="text" placeholder="Your image link here" />
        <input type="text" placeholder="Add a description(optional)" />
          <div id="controlButtons">
            <button onClick={this.closeForm}>Close</button>
          <button onClick={this.handleSubmit}>Post Image</button>
          </div>
      </form>
    )
  }
}

export default PFContainer(ImagePostForm);
