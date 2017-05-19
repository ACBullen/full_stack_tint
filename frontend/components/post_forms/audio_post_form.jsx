import React from 'react';
import { Link } from 'react-router-dom';
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
  }

  componentWillMount() {
    this.props.requestCloudinaryKeys();
  }

  handle

  getMediaUrl(url) {
    this.setState({media_link: url});
  }

  render() {
    return (
      <div id="AudioPostForm" className="baseLozenge">
        {this.state.media_link === '' ? (
          <form id="audioInputs">

        <input type="text" placeholder="Link your audio file here (mp3 only)" /> <div><p>or upload:</p>
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
          <input type="text" placeholder="Track name here!" />
          <textarea id="descAud" placeholder="Leave a description if you like"></textarea>
          <div id="controlButtons">
            <button type="button">close</button>
            <button type="button">post</button>
          </div>
      </div>
    )
  }
}

export default PostFormContainer(AudioPostForm);
