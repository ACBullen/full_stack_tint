import React from 'react';
import PostHeader from './post_header';

const VideoPost = ({post, user, fi}) => {

  return (
    <div id="VideoPost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      {post.media_link ?(
        <video  controls>
          <source src={`${post.media_link}`}/>
        </video>

      ) : (<iframe id="media" src={post.link_url} allowFullScreen></iframe>) }
      <p>{post.body}</p>
    </div>
  )
}

export default VideoPost;
