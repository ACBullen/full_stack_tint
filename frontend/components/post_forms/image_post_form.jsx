import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PFContainer from './post_form_container';
import { closeForm } from '../../util/post_form_util';
import UploadImgButton from './upload_img_button';

class ImagePostForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.post) {
      let post = Object.assign({}, this.props.post);
      post.created_at = undefined;
      post.id = undefined;
      post.media_type = "none";
      if(this.props.reblog && post.original_auth_id === undefined){
        post.original_auth_id = post.user_id,
        post.user_id = this.props.userId
      }
      this.state = post;
    } else {
      this.state = {
        title: '',
        body: '',
        link_url: '',
        media_link: '',
        post_type: 'image',
        media_type: 'image',
        user_id: this.props.userId
      };
    }
    this.formName = "PostForm";
    this.base_path = this.props.match.params['base'];

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
      let target = this.base_path
      if (this.props.reblog){
        this.props.createPost(this.state).then(this.props.history.push(`/${target}`))
      } else {
        this.props.post ? (
          this.props.updatePost(this.props.post.id, this.state).then(this.props.history.push(`/${target}`))
        ): (this.props.createPost(this.state).then(this.props.history.push(`/${target}`)));
      }
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

  removeContent(e){
    this.setState({media_link: ''})
  }

  render(){
    return (
      <form id={this.formName} className="baseLozenge">
        {this.state.media_link === '' ? (
          <div id="imgInputs"> <input type="text" onChange={this.handleLinkInput} placeholder="Your image link here" value={this.state.link_url}/>
          <h4> Or upload: </h4>
      <UploadImgButton cloudinaryOptions={this.props.apiKeys.cloudinary_options} getMediaUrl={this.getMediaUrl.bind(this)} /></div>
      ) : (
        <div id="preview"><img src={this.state.media_link} />
        <button onClick={this.removeContent.bind(this)}>Remove</button></div>
      )}
        <input type="text" placeholder="Add a description (optional)" onChange={this.handleDesc} value={this.state.body} />
          <div id="controlButtons">
            <Link to={`${this.base_path}`}><button type="button">Close</button></Link>
          <button onClick={this.handleSubmit}>Post</button>
          </div>
      </form>
    )
  }
}

export default withRouter(PFContainer(ImagePostForm));
