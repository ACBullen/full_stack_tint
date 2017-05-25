import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


const VideoPost = ({post, user, deletePost, currentUser, fi, orAuth}) => {

  return (
    <div id="VideoPost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader orAuth={orAuth} user={user} fi={fi} post={post} />
      {post.media_link ?(
        <video  controls>
          <source src={`${post.media_link}`}/>
        </video>

      ) : (<iframe id="media" src={post.link_url} allowFullScreen></iframe>) }
      <p>{post.body}</p>
        <PostFooter post={post} fi={fi} />
    </div>
  )
}

export default VideoPost;
