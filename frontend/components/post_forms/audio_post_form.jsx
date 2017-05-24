import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import UploadAudioButton from './upload_audio_button';

class AudioPostForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.post) {
      let post = Object.assign({}, this.props.post);
      post.created_at = undefined;
      post.id = undefined;
      this.state = post;
    } else {
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
    this.cur_path = this.props.location.pathname;
    let base_idx = (this.cur_path.indexOf("/post") > -1 ? this.cur_path.indexOf('/post') : this.cur_path.indexOf('/edit'))
    this.base_path = this.cur_path.slice(0, base_idx);

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
      let target = this.base_path
      this.props.post ? (
        this.props.updatePost(this.props.post.id, this.state).then(this.props.history.push(`${target}`))
      ): (this.props.createPost(this.state).then(this.props.history.push(`${target}`)));
    }
  }

  render() {
    return (
      <div id="PostForm" className="baseLozenge">
        {this.state.media_link === '' ? (
          <form id="PostInputs">

        <input onChange={this.handleLinkInput} type="text" placeholder="Link your audio file here (mp3 only)" value={this.state.link_url}/> <div><p>{"or upload (10MB max):"}</p>
        <UploadAudioButton cloudinaryOptions={this.props.apiKeys.cloudinary_options}
          getMediaUrl={this.getMediaUrl.bind(this)} /></div>

        </form>) : (
            <div id="preview">
              <h4>File Uploaded! Preview here:</h4>
            <audio controls>
              <source src={this.state.media_link} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>
            <button onClick={this.setState.bind(this)({media_link: ''})}>Remove</button>
          </div>)
          }
          <input onChange={this.handleTrackInput} type="text" placeholder="Track name here!" value={this.state.title}/>
          <textarea onChange={this.handleDescInput} id="desc" placeholder="Leave a description if you like" value={this.state.body}></textarea>
          <div id="controlButtons">
            <Link to={`${this.base_path}`}><button type="button">close</button></Link>
            <button onClick={this.handleSubmit} type="button">Post</button>
          </div>
      </div>
    )
  }
}

export default withRouter(PostFormContainer(AudioPostForm));
