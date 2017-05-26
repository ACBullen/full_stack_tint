import React from 'react';
import PostHeader from './post_header';
import PostFooter from './post_footer';

const QuotePost = ({post}) => {
  return (
    <div id="Quote" className="contentFlex" >

      <article><i className="fa fa-quote-left" aria-hidden="true"></i>
      {post.body}<i className="fa fa-quote-right" aria-hidden="true"></i></article>

      <p>{post.title}</p>

    </div>
  )
}

export default QuotePost;
