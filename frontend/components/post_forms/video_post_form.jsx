import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import UploadVideoButton from './upload_vid_button';

class VideoPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'video',
      media_type: 'video',
      user_id: this.props.userId
    }
    this.handleLinkInput = this.handleLinkInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestCloudinaryKeys();
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
      this.props.createPost(this.state).then(this.props.history.push('/'));
    }
  }

  render() {
    return (
      <div id="PostForm" className="baseLozenge">
        {this.state.media_link === '' ? (
          <form id="PostInputs">

        <input onChange={this.handleLinkInput} type="text" placeholder="Link your video file here)" value={this.state.link_url}/> <div><p>or upload:</p>
        <UploadVideoButton cloudinaryOptions={this.props.apiKeys.cloudinary_options}
          getMediaUrl={this.getMediaUrl.bind(this)} /></div>

        </form>) : (
            <div id="preview">
              <h4>File Uploaded! Preview here:</h4>

                <iframe title="YouTube video player" class="youtube-player" type="text/html"
                  width="640" height="390" src={this.media_link}
                  frameborder="0" allowFullScreen></iframe>
          </div>)
          }
          <textarea onChange={this.handleDescInput} id="desc" placeholder="Leave a description if you like" value={this.state.body}></textarea>
          <div id="controlButtons">
            <Link to='/'><button type="button">close</button></Link>
            <button onClick={this.handleSubmit} type="button">post</button>
          </div>
      </div>
    )
  }
}

export default withRouter(PostFormContainer(VideoPostForm));