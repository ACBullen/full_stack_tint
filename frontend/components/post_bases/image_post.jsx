import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';

const ImagePost = ({post}) => {

  return (
    <div id="ImagePost" className="contentFlex" >

      <img id="media" src={post.media_link ? post.media_link : post.link_url } />
      <p>{post.body}</p>

    </div>
  )
}

export default ImagePost;
