import React from 'react';
import PostHeader from './post_header';

const QuotePost = ({post, user, fi}) => {

  return (
    <div id="Quote" className={ fi ? "baseLozenge feed-item" : "baseLozenge"}>
      <PostHeader user={user} />
      <article><i className="fa fa-quote-left" aria-hidden="true"></i>
      {post.body}<i className="fa fa-quote-right" aria-hidden="true"></i></article>

      <p>{post.title}</p>
    </div>
  )
}

export default QuotePost;
