import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';

const AudioPost = ({post, user, currentUser, deletePost, fi}) => {
  let source;
  post.media_link ? source = post.media_link : source = post.link_url;
  return (
    <div id="AudioPost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <h3>{post.title}</h3>
        <audio  controls src={source}  />

        <p>{post.body}</p>
          <PostFooter post={post} fi={fi} />
    </div>
  )
}

export default AudioPost;
