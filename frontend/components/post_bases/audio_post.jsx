import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


class AudioPost extends React.Component {
  constructor(props){
    super(props)
    this.audioExposed = false;
  }

  generateAudio(e){

    if(!this.audioExposed){
      let source
      this.props.post.media_link ? source = this.props.post.media_link : source = this.props.post.link_url;
      let audioLoc = document.getElementById(`Audio${this.props.post.id}`);
      audioLoc.innerHTML = ``;
      let audioPlay = document.createElement('audio')
      audioPlay.id       = 'audio-player';
      audioPlay.controls = 'controls';
      audioPlay.src      = `${source}`;
      audioPlay.type     = 'audio/mpeg';
      audioLoc.appendChild(audioPlay)
      this.audioExposed = true;
    }
  }

  render(){
    // let source;
    // this.props.post.media_link ? source = this.props.post.media_link : source = this.props.post.link_url;
    return (
      <div id="AudioPost" className="contentFlex" >

        <h3>{this.props.post.title}</h3>
          <div onClick={this.generateAudio.bind(this)} className="audioDiv" id={`Audio${this.props.post.id}`}>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            </div>

          <p>{this.props.post.body}</p>
      </div>
    )
  }

}

export default AudioPost;
