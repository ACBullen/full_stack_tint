import React from 'react';

class PostBase extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="baseLozenge feed-item">
        <p>{this.props.post.id}{this.props.post.body} <br/> {this.props.post.title} {this.props.post.post_type}</p>
      </div>
    )
  }
}

export default PostBase;
