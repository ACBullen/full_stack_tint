import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';


const LinkPost = ({post, user, deletePost, currentUser, fi, orAuth}) => {

  let show_url = post.link_url;
  let char_limit;
  fi === "true" ? char_limit = 25 : char_limit = 40
  if (show_url.length > char_limit + 3) {
    show_url = `${show_url.slice(0, char_limit)}...`;
  }
  return (
    <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader orAuth={orAuth} user={user} fi={fi} post={post} />
      <a href={post.link_url}>{show_url}</a>
      <p>{post.body}</p>
        <PostFooter post={post} fi={fi} />
    </div>
  )
}

export default LinkPost;
