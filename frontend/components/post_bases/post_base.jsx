import React from 'react';
import Quote from './quote_post';

class PostBase extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    switch (this.props.post.post_type) {
      case "quote":
        return <Quote post={this.props.post} />
  
      default:
      return(
        <div className="baseLozenge feed-item">
          <p>{this.props.post.id}{this.props.post.body} <br/> {this.props.post.title} {this.props.post.post_type}</p>
        </div>
      )
    }
  }
}

export default PostBase;
