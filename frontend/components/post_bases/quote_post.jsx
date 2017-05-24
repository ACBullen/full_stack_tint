import React from 'react';
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
    </div>
  )
}

export default QuotePost;
