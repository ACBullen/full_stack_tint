import React from 'react';

import PostHeader from './post_header';

const LinkPost = ({post, user}) => {

  return (
    <div className="baseLozenge feed-item">
      <PostHeader user={user} />
      <a href={post.link_url}>{post.link_url}</a>
      <p>{post.body}</p>
    </div>
  )
}

export default LinkPost;
