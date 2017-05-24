import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';

const ImagePost = ({post, user, currentUser, deletePost, fi}) => {

  return (
    <div id="ImagePost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} fi={fi} post={post} />
      <img id="media" src={post.media_link ? post.media_link : post.link_url } />
      <p>{post.body}</p>
        <PostFooter post={post} fi={fi} />
    </div>
  )
}

export default ImagePost;
