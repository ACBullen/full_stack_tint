import React from 'react';
import PostHeader from './post_header';

const VideoPost = ({post, user, fi}) => {

  return (
    <div id="VideoPost" className={ fi ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      {post.media_link ?(
        <iframe id="media" src={post.media_link} allowFullScreen></iframe>

      ) : (<iframe id="media" src={post.link_url} allowFullScreen></iframe>) }
      <p>{post.body}</p>
    </div>
  )
}

export default VideoPost;
