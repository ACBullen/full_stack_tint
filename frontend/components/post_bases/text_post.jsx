import React from 'react';
import PostHeader from './post_header';

class TextPost extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    console.log(this.props.media_type);
    return(
      <div className="baseLozenge feed-item">
        <PostHeader user={this.props.user} />
        <h2>{this.props.post.title}</h2>
        {
          <a href={this.props.post.link_url}>{this.props.post.link_url}</a>
        }
        <article>
          <p>{this.props.post.body}</p>
        </article>
      </div>
    )
  }
}

export default TextPost;
