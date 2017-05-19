import React from 'react';
import PostHeader from './post_header';

const QuotePost = ({post, user}) => {

  return (
    <div id="Quote" className="baseLozenge feed-item">
      <PostHeader user={user} />
      <article><i className="fa fa-quote-left" aria-hidden="true"></i>
      {post.body}<i className="fa fa-quote-right" aria-hidden="true"></i></article>

      <p>{post.title}</p>
    </div>
  )
}

export default QuotePost;
