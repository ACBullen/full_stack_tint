import React from 'react';
import PostHeader from './post_header';

const AudioPost = ({post, user, fi}) => {
  let source;
  post.media_link ? source = post.media_link : source = post.link_url;
  return (
    <div id="AudioPost" className={ fi ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <h3>{post.title}</h3>
        <audio  controls src={source} type="audio/mpeg" />

        <p>{post.body}</p>
    </div>
  )
}

export default AudioPost;
