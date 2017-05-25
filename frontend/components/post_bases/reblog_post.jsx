import React from 'react';
import ImagePost from '../post_bases/image_post';
import LinkPost from '../post_bases/link_post';
import AudioPost from '../post_bases/audio_post';
import VideoPost from '../post_bases/video_post';
import QuotePost from '../post_bases/quote_post';
import TextPost from '../post_bases/text_post';

class ReblogPost extends React.Component {
  constructor(props){
    super(props);
    this.post_chain = [this.props.post];
    let i = 0
    let localstore = store.getState();
    let posts = localstore.posts;
    while(i < this.post_chain.length){
      console.log(posts);
      if(this.post_chain[i].rb_post_id){
        this.post_chain.push(posts[`${this.post_chain[i].rb_post_id}`])

      }
      i++;
    }

    this.post_chain = this.post_chain.slice(1);
  }

  renderPostContent(post, idx){
    switch (post.post_type){
    case "image":
      return <ImagePost key={idx} post={post} />
    case "link":
      return <LinkPost key={idx} post={post} />
    case "audio":
      return <AudioPost key={idx} post={post} />
    case "video":
      return <VideoPost key={idx} post={post} />
    case "text":
      return <TextPost key={idx} post={post} />
    case "quote":
      return <QuotePost key={idx} post={post} />
    case "reblog":
      return (<ReblogPost key={idx} post={post} />)
    default:
      return (<p>{post.id}</p>)
    }
  }

  render(){
    let post_chain = this.post_chain.reverse();
    console.log(post_chain);
    return(
      <div id="reblog">
        {post_chain.map(post, idx => this.renderPostContent.bind(this)(post, idx))}

        {this.props.post.body ? <div><p>{this.props.post.body}</p></div> : ""}

      </div>
    )
  }
}

export default ReblogPost;
