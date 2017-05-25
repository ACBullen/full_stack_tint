import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


const VideoPost = ({post}) => {

  return (
    <div id="VideoPost" className="contentFlex" >

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
