import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util';
import UploadImgButton from './upload_img_button';
import UploadVidButton from './upload_vid_button';
import UploadAudioButton from './upload_audio_button';

class TextPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'text',
      media_type: '',
      user_id: this.props.userId
    };

    this.formName = "TextPostForm";
    this.cur_path = this.props.location.pathname;
    this.base_path = this.cur_path.slice(0, this.cur_path.indexOf("/post"));

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleMediaInput = this.handleMediaInput.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.showLinkInput = this.showLinkInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.closeForm = closeForm.bind(this)(this.formName);
  }

  componentWillMount() {
    this.props.requestCloudinaryKeys();

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
      let target = this.base_path
      if (this.base_path === "/home"){
        target = '/'
      }
      this.props.createPost(this.state).then(this.props.history.push(`${target}`));

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


  showImageInput(){


    let imageInput= document.getElementById("additionalImage");
    let videoInput= document.getElementById("additionalVid");
    let audioInput= document.getElementById("additionalAud");

    if (imageInput.style.display === ""){

      imageInput.style.display = 'flex';
      videoInput.style.display = '';
      audioInput.style.display = '';

      this.setState({media_type: 'image'});

    } else {
      imageInput.style.display = '';
      this.setState({media_type: ''});

    }
    this.setState({media_link: ''});
  }

  showAudioInput(e){
    let imageInput= document.getElementById("additionalImage");
    let videoInput= document.getElementById("additionalVid");
    let audioInput= document.getElementById("additionalAud");

    if (audioInput.style.display === ""){
      imageInput.style.display = '';
      videoInput.style.display = '';
      audioInput.style.display = "flex";

      this.setState({media_type: 'audio'});
    } else {
      audioInput.style.display = '';
    }

    this.setState({media_link: ''});
  }

  showVideoInput(e){

    let imageInput= document.getElementById("additionalImage");
    let videoInput= document.getElementById("additionalVid");
    let audioInput = document.getElementById("additionalAud");

    if (videoInput.style.display === ""){
      audioInput.style.display = '';
      imageInput.style.display = '';
      videoInput.style.display = 'flex';

      this.setState({media_type: 'video'});
    } else {
      videoInput.style.display = '';

    }
    this.setState({media_link: ''});
  }

  getMediaUrl(url) {
    document.getElementById("additionalImage").style.display = 'none';
    document.getElementById("additionalVid").style.display= 'none';
    this.setState({media_link: url});
  }

  render() {
    return(

      <form id={this.formName} className='baseLozenge'>

        <div id="topLine">
        <input onChange={this.handleTitleInput} type='text' placeholder="Your title here!" value={this.state.title}/>
          {this.state.media_link === '' ? (<div id="additionalContentLinks">
            <i id="addlCButton" className="fa fa-link" aria-hidden="true" onClick={this.showLinkInput.bind(this)}></i>
            <i id="addlCButton" className="fa fa-video-camera" aria-hidden="true"onClick={this.showVideoInput.bind(this)}></i>
            <i id="addlCButton" className="fa fa-camera" aria-hidden="true"onClick={this.showImageInput.bind(this)}></i>
            <i id="addlCButton" className="fa fa-headphones" aria-hidden="true"onClick={this.showAudioInput.bind(this)}></i>
          </div>) : <h4>Content Uploaded!</h4>}
        </div>
        <div id="additionalContent">
        <lable id="additionalLink"><i className="fa fa-link" aria-hidden="true"></i>
        <input type="text" value={this.state.link_url} placeholder="Input link here!" onChange={this.handleMediaInput.bind(this)}/>

        </lable>

        <lable id="additionalImage"><i className="fa fa-camera" aria-hidden="true"></i>
        <input type="text" value={this.state.media_link} placeholder="Input image link here!" onChange={this.handleMediaInput}/>

        <lable> or upload: <UploadImgButton cloudinaryOptions={this.props.apiKeys.cloudinary_options} getMediaUrl={this.getMediaUrl.bind(this)} /></lable>

        </lable>

        <lable id="additionalVid"><i className="fa fa-video-camera" aria-hidden="true"></i>
        <input type="text" value={this.state.media_link} placeholder="Input video link here!" onChange={this.handleMediaInput}/>

        <lable> {"or upload (40MB max):"} <UploadVidButton cloudinaryOptions={this.props.apiKeys.cloudinary_options} getMediaUrl={this.getMediaUrl.bind(this)} /></lable>

        </lable>

        <lable id="additionalAud"><i className="fa fa-headphones" aria-hidden="true"></i>
        <input type="text" value={this.state.media_link} placeholder="Input audio link here!" onChange={this.handleMediaInput}/>
        <lable> {"or upload (10MB max):"} <UploadAudioButton cloudinaryOptions={this.props.apiKeys.cloudinary_options} getMediaUrl={this.getMediaUrl.bind(this)} /></lable>

        </lable>
        </div>


        <textarea onChange={this.handleBodyInput} placeholder="Post Body" value={this.state.body}></textarea>


        <div id="controlButtons">
          <Link to={`${this.base_path}`}><button type="button">Close</button></Link>
          <button onClick={this.handleSubmit} type="button">Post</button>
        </div>
      </form>

    )
  }

}

export default withRouter(PFContainer(TextPostForm));
