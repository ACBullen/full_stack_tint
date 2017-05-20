import React from 'react';
import PostHeader from './post_header';

const AudioPost = ({post, user}) => {
  let source;
  post.media_link ? source = post.media_link : source = post.link_url;
  return (
    <div id="AudioPost" className="baseLozenge feed-item">
      <PostHeader user={user} />
      <h3>{post.title}</h3>
        <audio  controls src={source} type="audio/mpeg" />

        <p>{post.body}</p>
    </div>
  )
}

export default AudioPost;
