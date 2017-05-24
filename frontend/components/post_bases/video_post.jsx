import React from 'react';
import PostHeader from './post_header';
import { Link } from 'react-router-dom';

const VideoPost = ({post, user, currentUser, deletePost, fi}) => {

  return (
    <div id="VideoPost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      {post.media_link ?(
        <video  controls>
          <source src={`${post.media_link}`}/>
        </video>

      ) : (<iframe id="media" src={post.link_url} allowFullScreen></iframe>) }
      <p>{post.body}</p>
        {currentUser.id === user.id ? (
          <div id="authorOptions">
            <Link to={ fi === "true" ? (
                `home/edit/video/${post.id}`
              ) : (`feed/edit/video/${post.id}`)}><button>Edit</button></Link>
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

export default VideoPost;
