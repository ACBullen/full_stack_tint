import React from 'react';
import PostHeader from './post_header';
import { Link } from 'react-router-dom';

const LinkPost = ({post, user, deletePost, fi}) => {
  let show_url = post.link_url;
  let char_limit;
  fi === "true" ? char_limit = 25 : char_limit = 40
  if (show_url.length > char_limit + 3) {
    show_url = `${show_url.slice(0, char_limit)}...`;
  }
  return (
    <div className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <a href={post.link_url}>{show_url}</a>
      <p>{post.body}</p>
        {currentUser.id === user.id ? (
          <div id="authorOptions">
            <Link to={ fi === "true" ? (
                `home/edit/link/${post.id}`
              ) : (`feed/edit/link/${post.id}`)}><button>Edit</button></Link>
            <button onClick={
                (e)=> {
                  e.preventDefault;
                  return deletePost(post.id);
                }
              }>Delete</button>

            </div>
        ) : ("")}
    </div>
  )
}

export default LinkPost;
