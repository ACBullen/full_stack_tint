import React from 'react';
import PostHeader from './post_header';

const LinkPost = ({post, user, fi}) => {

  return (
    <div className={ fi ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <a href={post.link_url}>{post.link_url}</a>
      <p>{post.body}</p>
    </div>
  )
}

export default LinkPost;
