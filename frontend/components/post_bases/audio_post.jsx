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
      this.audioPlay = document.createElement('audio')
      this.audioPlay.id       = `audio-player${this.props.post.id}`;
      this.audioPlay.volume   = "0.5"
      this.audioPlay.src      = `${source}`;
      this.audioPlay.type     = 'audio/mpeg';
      audioLoc.appendChild(this.audioPlay);
      audioLoc.innerHTML +=(
        `<i class="fa fa-play-circle" id="player${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-pause-circle" id="pauser${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-volume-down" id="down${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-volume-up" id="up${this.props.post.id}" aria-hidden="true"></i>
         <i class="fa fa-volume-off" id="mute${this.props.post.id}"aria-hidden="true"></i>
         `);
      this.pause = document.getElementById(`pauser${this.props.post.id}`)
      this.pause.addEventListener('click', this.pauseAudio.bind(this));
      this.play = document.getElementById(`player${this.props.post.id}`)
      this.play.addEventListener('click', this.playAudio.bind(this));
      document.getElementById(`up${this.props.post.id}`).addEventListener('click', this.volUp.bind(this));
      document.getElementById(`down${this.props.post.id}`).addEventListener('click', this.volDown.bind(this));
      this.mute = document.getElementById(`mute${this.props.post.id}`)
      this.mute.addEventListener('click', this.toggleMute.bind(this));
      this.audioExposed = true;
    }
    // document.getElementById(`audio-player${this.props.post.id}`).play();
  }

  playAudio(){
    // e.preventDefault();
    let audio = this.audioPlay;

    if (audio.paused){
      audio.play();
      this.play.style.color = "black";
      this.pause.style.color = "#f9fcff";
    }
  }


  pauseAudio(){
    let audio = this.audioPlay;
    if (!audio.paused){
      audio.pause();
      this.pause.style.color = "black";
      this.play.style.color = "#f9fcff";
    }
  }
  volUp(){
    let audio = this.audioPlay;
    if (!this.muted){
      if (audio.volume > 0.9){
        this.audio.volume = 0.9;
      }
      audio.volume += .1;
    }
  }

  volDown(){
    let audio = this.audioPlay;
    if (!this.muted && audio.volume > 0.0){
      audio.volume -= .1;
    }
  }

  toggleMute(){
    let audio = this.audioPlay;

    if (!this.muted){
      this.mute.style.color = "black";
      this.baseVol = audio.volume;
      audio.volume = 0.0;
      this.muted = true;
    } else {
      this.mute.style.color = "#f9fcff";
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
            <i className="fa fa-file-audio-o" aria-hidden="true"></i>
            </div>

          <p>{this.props.post.body}</p>
      </div>
    )
  }

}

export default AudioPost;
