import React from 'react';
import { Link } from 'react-router-dom';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util';
import UploadImgButton from './upload_img_button';

class ImagePostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'image',
      media_type: 'image',
      user_id: this.props.userId
    };

    this.formName = "ImagePostForm";


    this.closeForm = closeForm.bind(this)(this.formName);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLinkInput = this.handleLinkInput.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }

  componentWillMount() {
    this.props.requestCloudinaryKeys();
  }

  handleSubmit(e){

    if (this.state.link_url.length < 4 && this.state.media_link.length < 1){
      alert("please submit a valid link or upload an image");
    } else {
      this.props.createPost(this.state).then(this.props.history.push('/'));
    }
  }

  handleDesc (e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }
  handleLinkInput(e){
    this.setState({link_url: e.target.value})
  }

  getMediaUrl(url) {
    this.setState({media_link: url});
  }

  render(){
    return (
      <form id={this.formName} className="baseLozenge">
        {this.state.media_link === '' ? (<div id="imgInputs"> <input type="text" onChange={this.handleLinkInput} placeholder="Your image link here" value={this.state.link_url}/> <h5> Or upload: </h5>
      <UploadImgButton cloudinaryOptions={this.props.apiKeys.cloudinary_options} getMediaUrl={this.getMediaUrl.bind(this)} /></div>) : <img src={this.state.media_link} />}
        <input type="text" placeholder="Add a description(optional)" onChange={this.handleDesc} value={this.state.body} />
          <div id="controlButtons">
            <Link to='/'><button type="button">Close</button></Link>
          <button onClick={this.handleSubmit}>Post</button>
          </div>
      </form>
    )
  }
}

export default PFContainer(ImagePostForm);
