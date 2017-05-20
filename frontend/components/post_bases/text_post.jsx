import React from 'react';
import PostHeader from './post_header';

class TextPost extends React.Component {
  constructor(props){
    super(props);
  }

  mediaSwitcher(){
    console.log(this.props.post);
    switch (this.props.post.media_type) {
      case "image":

        return (
          <img id="media" src={this.props.post.media_link} />
        )
      case "video":
        return (
          <iframe id="media" src={this.props.post.media_link} />
        )
      case "audio":
        return (
          <audio  controls src={this.props.post.media_link} type="audio/mpeg" />
        )
      default:
      return "";
    }
  }

  render (){
    return(
      <div className="baseLozenge feed-item">
        <PostHeader user={this.props.user} />
        <h2>{this.props.post.title}</h2>
        {this.props.post.link_url ?(
          <a href={this.props.post.link_url}>{this.props.post.link_url}</a>) : (
            ""
          )
        }
        {this.mediaSwitcher()}
        <article>
          <p>{this.props.post.body}</p>
        </article>
      </div>
    )
  }
}

export default TextPost;
