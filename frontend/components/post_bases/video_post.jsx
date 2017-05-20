import React from 'react';
import PostHeader from './post_header';

const VideoPost = ({post, user}) => {

  return (
    <div id="VideoPost" className="baseLozenge feed-item">
      <PostHeader user={user} />
      {post.media_link ?(
        <iframe id="media" src={post.media_link} allowFullScreen></iframe>

      ) : (<iframe id="media" src={post.link_url} allowFullScreen></iframe>) }
      <p>{post.body}</p>
    </div>
  )
}

export default VideoPost;
