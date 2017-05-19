import React from 'react';

const QuotePost = ({post}) => {

  return (
    <div id="Quote" className="baseLozenge feed-item">

      <article><i className="fa fa-quote-left" aria-hidden="true"></i>
      {post.body}<i className="fa fa-quote-right" aria-hidden="true"></i></article>

      <p>{post.title}</p>
    </div>
  )
}

export default QuotePost;
