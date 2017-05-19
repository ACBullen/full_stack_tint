import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import UploadAudioButton from './upload_audio_button';

class AudioPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'audio',
      media_type: 'audio',
      user_id: this.props.userId
    }


    this.handleTrackInput = this.handleTrackInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleLinkInput = this.handleLinkInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestCloudinaryKeys();
  }

  handleLinkInput (e){
    this.setState({link_url: e.target.value})
  }

  handleTrackInput(e){
    this.setState({title: e.target.value})
  }

  handleDescInput (e){
    this.setState({body: e.target.value})
  }

  getMediaUrl(url) {
    this.setState({media_link: url});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.link_url.length < 4 && this.state.media_link.length < 1){
      alert("please submit a valid url or upload an audio file")
    } else {
      this.props.createPost(this.state).then(this.props.history.push('/'));
    }
  }

  render() {
    return (
      <div id="PostForm" className="baseLozenge">
        {this.state.media_link === '' ? (
          <form id="PostInputs">

        <input onChange={this.handleLinkInput} type="text" placeholder="Link your audio file here (mp3 only)" value={this.state.link_url}/> <div><p>or upload:</p>
        <UploadAudioButton cloudinaryOptions={this.props.apiKeys.cloudinary_options}
          getMediaUrl={this.getMediaUrl.bind(this)} /></div>

        </form>) : (
            <div id="preview">
              <h4>File Uploaded! Preview here:</h4>
            <audio controls>
              <source src={this.state.media_link} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
          </div>)
          }
          <input onChange={this.handleTrackInput} type="text" placeholder="Track name here!" value={this.state.title}/>
          <textarea onChange={this.handleDescInput} id="desc" placeholder="Leave a description if you like" value={this.state.body}></textarea>
          <div id="controlButtons">
            <button type="button">close</button>
            <button onClick={this.handleSubmit} type="button">Post</button>
          </div>
      </div>
    )
  }
}

export default withRouter(PostFormContainer(AudioPostForm));
