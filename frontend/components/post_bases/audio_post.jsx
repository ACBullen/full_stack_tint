import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


const AudioPost = ({post}) => {

  let source;
  post.media_link ? source = post.media_link : source = post.link_url;
  return (
    <div id="AudioPost" className="contentFlex" >

      <h3>{post.title}</h3>
        <audio  controls src={source}  />

        <p>{post.body}</p>
    </div>
  )
}

export default AudioPost;
