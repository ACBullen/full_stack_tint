import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


class AudioPost extends React.Component {
  constructor(props){
    super(props)
    this.audioExposed = false;
    this.baseVol = 0.5;
    this.muted = false;
  }

  exposeAudio(e){

    if(!this.audioExposed){
      let source
      this.props.post.media_link ? source = this.props.post.media_link : source = this.props.post.link_url;
      let audioLoc = document.getElementById(`Audio${this.props.post.id}`);
      audioLoc.innerHTML = '';
      let audioPlay = document.createElement('audio')
      audioPlay.id       = `audio-player${this.props.post.id}`;
      audioPlay.volume   = "0.5"
      audioPlay.src      = `${source}`;
      audioPlay.type     = 'audio/mpeg';
      audioLoc.appendChild(audioPlay);
      audioLoc.innerHTML +=(
        `<i class="fa fa-play-circle" id="player${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-pause-circle" id="pauser${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-volume-down" id="down${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-volume-up" id="up${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-volume-off" id="mute${this.props.post.id}"aria-hidden="true"></i>
         `);
      document.getElementById(`pauser${this.props.post.id}`).addEventListener('click', this.pauseAudio.bind(this));
      document.getElementById(`player${this.props.post.id}`).addEventListener('click', this.playAudio.bind(this));
      document.getElementById(`up${this.props.post.id}`).addEventListener('click', this.volUp.bind(this));
      document.getElementById(`down${this.props.post.id}`).addEventListener('click', this.volDown.bind(this));
      document.getElementById(`mute${this.props.post.id}`).addEventListener('click', this.toggleMute.bind(this));
      console.log(audioPlay.volume);
      this.audioExposed = true;
    }
    // document.getElementById(`audio-player${this.props.post.id}`).play();
  }

  playAudio(){
    // e.preventDefault();
    let audio = document.getElementById(`audio-player${this.props.post.id}`)

    if (audio.paused){
      audio.play();
    }
  }


  pauseAudio(){
    let audio = document.getElementById(`audio-player${this.props.post.id}`)
    if (!audio.paused){
      audio.pause();
    }
  }
  volUp(){
    let audio = document.getElementById(`audio-player${this.props.post.id}`)
    if (!this.muted && audio.volume < 1.0){
      audio.volume += .1;
    }
  }

  volDown(){
    let audio = document.getElementById(`audio-player${this.props.post.id}`)
    if (!this.muted && audio.volume > 0.0){
      audio.volume -= .1;
    }
  }

  toggleMute(){
    let audio = document.getElementById(`audio-player${this.props.post.id}`)
    let muteButton = document.getElementById(`mute${this.props.post.id}`)
    if (!this.muted){
      muteButton.style.color = "black";
      this.baseVol = audio.volume;
      audio.volume = 0.0;
      this.muted = true;
    } else {
      muteButton.style.color = "#f9fcff";
      audio.volume = this.baseVol;
      this.muted = false;
    }
  }

  render(){
    // let source;
    // this.props.post.media_link ? source = this.props.post.media_link : source = this.props.post.link_url;
    return (
      <div id="AudioPost" className="contentFlex" >

        <h3>{this.props.post.title}</h3>
          <div onClick={this.exposeAudio.bind(this)} className="audioDiv" id={`Audio${this.props.post.id}`}>
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            </div>

          <p>{this.props.post.body}</p>
      </div>
    )
  }

}

export default AudioPost;
