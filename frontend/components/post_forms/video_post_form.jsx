import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import UploadVideoButton from './upload_vid_button';

class VideoPostForm extends React.Component {
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
        post_type: 'video',
        media_type: 'video',
        user_id: this.props.userId
      }
    }
    this.base_path = this.props.match.params['base'];

    this.handleLinkInput = this.handleLinkInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.apiKeys.cloudinary_options === undefined){
      this.props.requestCloudinaryKeys();
    }
  }

  handleLinkInput (e){
    this.setState({link_url: e.target.value})
  }


  handleDescInput (e){
    this.setState({body: e.target.value})
  }

  getMediaUrl(url) {
    this.setState({media_link: url});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.link_url.length < 5 && this.state.media_link < 1){
      alert("Please fill in a valid link or upload a video file");
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

  render() {
    return (
      <div id="PostForm" className="baseLozenge">
        {this.state.media_link === '' ? (
          <form id="PostInputs">

        <input onChange={this.handleLinkInput} type="text" placeholder="Link your video file here)" value={this.state.link_url}/> <div><p>{"or upload (40MB max): "}</p>
        <UploadVideoButton cloudinaryOptions={this.props.apiKeys.cloudinary_options}
          getMediaUrl={this.getMediaUrl.bind(this)} /></div>

        </form>) : (
            <div id="preview">
              <h4>File Uploaded! Preview here:</h4>

                <video  controls>
                  <source src={`${this.state.media_link.slice(0, this.state.media_link.length - 4)}`} type="video/mp4" />
                </video>
                <button onClick={()=>this.setState.bind(this)({media_link: ''})}>Remove</button>
          </div>)
          }
          <textarea onChange={this.handleDescInput} id="desc" placeholder="Leave a description if you like" value={this.state.body}></textarea>
          <div id="controlButtons">
            <Link to={`/${this.base_path}`}><button type="button">close</button></Link>
            <button onClick={this.handleSubmit} type="button">Post</button>
          </div>
      </div>
    )
  }
}

export default withRouter(PostFormContainer(VideoPostForm));
