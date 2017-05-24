import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';

class TextPost extends React.Component {
  constructor(props){
    super(props);

  }

  mediaSwitcher(){
    switch (this.props.post.media_type) {
      case "image":

        return (
          <img id="media" src={this.props.post.media_link} />
        )
      case "video":
        return (this.props.post.media_link.indexOf('youtube') > -1 ) ? (
          <iframe id="media" src={this.props.post.media_link} allowFullScreen></iframe>
        ) : (

            <video id="media" controls>
              <source src={this.props.post.media_link} />
            </video>

        )
      case "audio":
        return (
          <audio  controls src={this.props.post.media_link}  />
        )
      default:
      return "";
    }
  }

  render (){
    let fi = this.props.fi

    let show_url;
    if (this.props.post.link_url) {
      let char_limit;
      fi === "true" ? char_limit = 25 : char_limit = 40
      this.props.post.link_url.length > char_limit + 3 ? (
        show_url = `${this.props.post.link_url.slice(0, char_limit)}...`
        ) : (
          show_url = this.props.post.link_url)
      }
    return(
      <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
        <PostHeader user={this.props.user} />
        <h2>{this.props.post.title}</h2>
        {this.props.post.link_url ?(
          <a href={this.props.post.link_url}>{show_url}</a>) : (
            ""
          )
        }
        {this.mediaSwitcher()}
        <article>
          <p>{this.props.post.body}</p>
        </article>
        <PostFooter post={this.props.post} fi={this.props.fi} />
      </div>
    )
  }
}

export default TextPost;
