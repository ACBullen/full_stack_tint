import React from 'react';
import PostHeader from './post_header';
import { Link } from 'react-router-dom';

const ImagePost = ({post, user, deletePost, fi}) => {

  return (
    <div id="ImagePost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <img id="media" src={post.media_link ? post.media_link : post.link_url } />
      <p>{post.body}</p>
        {currentUser.id === user.id ? (
          <div id="authorOptions">
            <Link to={ fi === "true" ? (
                `home/edit/image/${post.id}`
              ) : (`feed/edit/image/${post.id}`)}><button>Edit</button></Link>
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

export default ImagePost;
