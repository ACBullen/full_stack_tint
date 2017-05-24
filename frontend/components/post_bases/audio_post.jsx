import React from 'react';
import PostHeader from './post_header';

const AudioPost = ({post, user, deletePost, currentUser, fi}) => {
  let source;
  post.media_link ? source = post.media_link : source = post.link_url;
  return (
    <div id="AudioPost" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <h3>{post.title}</h3>
        <audio  controls src={source}  />

        <p>{post.body}</p>
          {currentUser.id === user.id ? (
            <div id="authorOptions">
              <Link to={ fi === "true" ? (
                  `home/edit/audio/${post.id}`
                ) : (`feed/edit/audio/${post.id}`)}><button>Edit</button></Link>
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

export default AudioPost;
