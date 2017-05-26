import React from 'react';
import QuotePost from './quote_post';
import ImagePost from './image_post';
import LinkPost from './link_post';
import VideoPost from './video_post';
import AudioPost from './audio_post';
import TextPost from './text_post';
import ReblogPost from './reblog_post';
import PostHeader from './post_header';
import PostFooter from './post_footer';

class PostBase extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    let post = this.props.post;
    let user = this.props.users[post.user_id];
    let orAuth = this.props.users[post.original_auth_id];
    let fi = this.props.fi;
    let currentUser = this.props.currentUser;
    switch (post.post_type) {
      case "quote":
        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
            <QuotePost post={post}   />
                  <PostFooter post={post} fi={fi}/>
          </div>)
      case "image":

        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
            <ImagePost post={post}  />
                <PostFooter post={post} fi={fi}/>
          </div>)
      case "link":
        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
            <LinkPost post={post} fi={fi} />
                <PostFooter post={post} fi={fi}/>
            </div>)
      case "video":
        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
          <VideoPost post={post}  />
              <PostFooter post={post} fi={fi}/>
          </div>)
      case "audio":
        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
            <AudioPost post={post} />
              <PostFooter post={post} fi={fi}/>
            </div>)
      case "text":
        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
            <TextPost post={post} fi={fi} />
              <PostFooter post={post} fi={fi}/>
          </div>)
      case "reblog":
        return (
          <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
            <PostHeader user={user} orAuth={orAuth} post={post} fi={fi} />
            <ReblogPost user={user} post={post} fi={fi} />
              <PostFooter post={post} fi={fi}/>
          </div>)
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
