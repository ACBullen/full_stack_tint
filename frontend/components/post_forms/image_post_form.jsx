import React from 'react';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util';

class ImagePostForm extends React.Component {
  constructor(props){
    super(props);

    this.formName = "ImagePostForm";

    this.closeForm = closeForm.bind(this)(this.formName);
  }

  render(){
    return (
      <form id={this.formName}>
        <h1>I am an image post form!</h1>
      </form>
    )
  }
}

export default PFContainer(ImagePostForm);
