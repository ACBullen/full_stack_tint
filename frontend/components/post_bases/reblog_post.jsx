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

  }

  renderPostContent(post){
    switch (post.post_type){
    case "image":
      return <ImagePost post={post} />
    case "link":
      return <LinkPost post={post} />
    case "audio":
      return <AudioPost post={post} />
    case "video":
      return <VideoPost post={post} />
    case "text":
      return <TextPost post={post} />
    case "quote":
      return <QuotePost post={post} />
    case "reblog":
      return (<ReblogPost post={post} />)
    default:
      return (<p>{post.id}</p>)
    }
  }

  render(){


    return(
      <div id="reblog">
        {this.renderPostContent(this.props.post)}

        {this.props.post.comments ? this.props.post.comments.split("NEWLINE@#*$").map((line, idx)=><p id="commentComp" key={idx}>{line}<br /></p>) : ""}

      </div>
    )
  }
}

export default ReblogPost;
