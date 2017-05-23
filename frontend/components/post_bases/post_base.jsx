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
    let fi = this.props.fi;
    let currentUser = this.props.currentUser;
    switch (post.post_type) {
      case "quote":
        return <QuotePost post={post} currentUser={currentUser} deletePost={this.props.deletePost} user={user} fi={fi}  />
      case "image":

        return <ImagePost post={post} currentUser={currentUser} deletePost={this.props.deletePost} user={user} fi={fi} />
      case "link":
        return <LinkPost post={post} currentUser={currentUser} deletePost={this.props.deletePost} user={user} fi={fi} />
      case "video":
        return <VideoPost post={post} currentUser={currentUser} deletePost={this.props.deletePost} user={user} fi={fi} />
      case "audio":
        return <AudioPost post={post} currentUser={currentUser} deletePost={this.props.deletePost} user={user} fi={fi} />
      case "text":
        return <TextPost post={post} currentUser={currentUser} deletePost={this.props.deletePost} user={user} fi={fi} />
      default:
      return(
        <div className={ this.props.fi ? "baseLozenge feed-item" : "baseLozenge"}>
          <p>{this.props.post.id}{this.props.post.body} <br/> {this.props.post.title} {this.props.post.post_type}</p>
        </div>
      )
    }
  }
}

export default PostBase;
