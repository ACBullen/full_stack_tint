import React from 'react';
import PostHeader from './post_header';

const ImagePost = ({post, user}) => {

  return (
    <div id="ImagePost" className="baseLozenge feed-item">
      <PostHeader user={user} />
      <img src={post.media_link.length > 0 ? post.media_link : post.link_url } />
      <p>{post.body}</p>
    </div>
  )
}

export default ImagePost;
