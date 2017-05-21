import React from 'react';
import PostHeader from './post_header';

const ImagePost = ({post, user, fi}) => {

  return (
    <div id="ImagePost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <img id="media" src={post.media_link ? post.media_link : post.link_url } />
      <p>{post.body}</p>
    </div>
  )
}

export default ImagePost;
