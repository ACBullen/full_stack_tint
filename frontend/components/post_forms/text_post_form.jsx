import React from 'react';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util';

class TextPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'text',
      user_id: this.props.userId
    };

    this.formName = "TextPostForm";

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleMediaInput = this.handleMediaInput.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.showLinkInput = this.showLinkInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = closeForm.bind(this)(this.formName);
  }

  handleTitleInput(e) {
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  handleBodyInput(e) {
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }

  handleMediaInput(e){
    e.preventDefault();
    this.setState({media_link: e.currentTarget.value})
  }

  handleSubmit (e){
    e.preventDefault();
    if (this.state.title.length < 3) {
      alert("Must have  a title of at least 3 characters");
    } else {
      this.props.createPost(this.state).then(()=>this.closeForm(e));
    }
  }

  showLinkInput(e){
    let linkInput= document.getElementById("additionalLink");

    if (linkInput.style.display === ""){
      linkInput.style.display = 'flex';

    } else {
      linkInput.style.display = '';
      this.setState({link_url: ''})
    }
  }

  showImageInput(e){

    let imageInput= document.getElementById("additionalImage");
    let videoInput= document.getElementById("additionalVid");

    if (imageInput.style.display === ""){

      imageInput.style.display = 'flex';
      videoInput.style.display = '';

    } else {
      imageInput.style.display = '';
    }
    this.setState({media_link: ''});
  }

  showVideoInput(e){

    let imageInput= document.getElementById("additionalImage");
    let videoInput= document.getElementById("additionalVid");

    if (videoInput.style.display === ""){

      imageInput.style.display = '';
      videoInput.style.display = 'flex';

    } else {
      videoInput.style.display = '';
    }
    this.setState({media_link: ''});
  }

  render() {
    return(
      <form id={this.formName} className='baseLozenge'>

        <div id="topLine">
        <input onChange={this.handleTitleInput} type='text' placeholder="Your title here!" value={this.state.title}/>
          <div id="additionalContentLinks">
            <i className="fa fa-link" aria-hidden="true" onClick={this.showLinkInput.bind(this)}></i>
            <i className="fa fa-video-camera" aria-hidden="true"onClick={this.showVideoInput.bind(this)}></i>
            <i className="fa fa-camera" aria-hidden="true"onClick={this.showImageInput.bind(this)}></i>
          </div>
        </div>
        <div id="additionalContent">
        <lable id="additionalLink"><i className="fa fa-link" aria-hidden="true"></i>
        <input type="text" value={this.state.media_link} placeholder="Input link here!" onChange={this.handleMediaInput.bind(this)}/>
        </lable>

        <lable id="additionalImage"><i className="fa fa-camera" aria-hidden="true"></i>
        <input type="text" value={this.state.media_link} placeholder="Input image link here!" onChange={this.handleMediaInput.bind(this)}/>
        </lable>

        <lable id="additionalVid"><i className="fa fa-video-camera" aria-hidden="true"></i>
        <input type="text" value={this.state.media_link} placeholder="Input video link here!" onChange={this.handleMediaInput.bind(this)}/>
        </lable>
        </div>


        <textarea onChange={this.handleBodyInput} placeholder="Post Body" value={this.state.body}></textarea>

        <div id="controlButtons">
          <button onClick={this.closeForm}>Close</button>
          <button onClick={this.handleSubmit} type="button">Post</button>
        </div>
      </form>
    )
  }

}

export default PFContainer(TextPostForm);
