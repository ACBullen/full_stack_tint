import React from 'react';
import { Link } from 'react-router-dom';
import PostHeader from './post_header';
import PostFooter from './post_footer';

const QuotePost = ({post, user, fi, deletePost, currentUser }) => {

  return (
    <div id="Quote" className={ fi === "true" ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <article><i className="fa fa-quote-left" aria-hidden="true"></i>
      {post.body}<i className="fa fa-quote-right" aria-hidden="true"></i></article>

      <p>{post.title}</p>
      <PostFooter post={post} fi={fi} />
      {currentUser.id === user.id ? (
        <div id="authorOptions">
          <Link to={ fi === "true" ? (
              `home/edit/quote/${post.id}`
            ) : (`feed/edit/quote/${post.id}`)}><button>Edit</button></Link>
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

export default QuotePost;
