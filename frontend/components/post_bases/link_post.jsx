import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


const LinkPost = ({post, fi}) => {

  let show_url = post.link_url;
  let char_limit;
  fi === "true" ? char_limit = 25 : char_limit = 40
  if (show_url.length > char_limit + 3) {
    show_url = `${show_url.slice(0, char_limit)}...`;
  }
  return (
    <div className="contentFlex">

      <a href={post.link_url}>{show_url}</a>
      <p>{post.body}</p>

    </div>
  )
}

export default LinkPost;
