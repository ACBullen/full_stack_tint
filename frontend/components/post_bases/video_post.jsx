import React from 'react';
import PostHeader from './post_header';

const VideoPost = ({post, user}) => {

  return (
    <div id="VideoPost" className="baseLozenge feed-item">
      <PostHeader user={user} />
      {post.media_link ?(
        <video controls src="https://www.youtube.com/embed/ZPoqNeR3_UA" type="video/mp4" />

      ) : (<iframe src={post.media_link} />) }
      <p>{post.body}</p>
    </div>
  )
}

export default VideoPost;
