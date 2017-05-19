import React from 'react';
import QuotePost from './quote_post';
import ImagePost from './image_post';
import LinkPost from './link_post';
import VideoPost from './video_post';
import AudioPost from './audio_post';
import TextPost from './text_post';

class PostBase extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let post = this.props.post;
    let user = this.props.users[post.user_id];
    switch (post.post_type) {
      case "quote":
        return <QuotePost post={post} user={user} />
      case "image":

        return <ImagePost post={post} user={user}/>
      case "link":
        return <LinkPost post={post} user={user} />
      case "video":
        return <VideoPost post={post} user={user} />
      case "audio":
        return <AudioPost post={post} user={user} />
      case "text":
        return <TextPost post={post} user={user} />
      default:
      return(
        <div className="baseLozenge feed-item">
          <p>{this.props.post.id}{this.props.post.body} <br/> {this.props.post.title} {this.props.post.post_type}</p>
        </div>
      )
    }
  }
}

export default PostBase;
