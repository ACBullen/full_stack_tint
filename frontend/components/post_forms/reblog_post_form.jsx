import React from 'react';
import PostFormContainer from './post_form_container';
import PostContainer from '../post_bases/post_container';


class ReblogPostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'reblog',
      media_type: 'none',
      user_id: this.props.userId,
      original_auth_id: this.props.post.original_auth_id || this.props.post.user_id,
      rb_post_id: this.props.post.id
    })
  }

  contentDisplay(){
    switch (this.props.post.post_type){
    case "image":
      return <ImagePost post={this.props.post} />
    case "link":
      return <LinkPost post={this.props.post} />
    case "audio":
      return <AudioPost post={this.props.post} />
    case "video":
      return <VideoPost post={this.props.post} />
    case "reblog":
      return <h1>REBLOGREBLOGREBLOG</h1>
    default:
      return <p>{this.props.post.id}</p>
      }
  }

  render() {

    return(
      <div>
        <div className="baseLozenge">
        {this.contentDisplay()}
        </div>
      <h1>REBLOGREBLOGREBLOG</h1>
      </div>
    )
  }

}

export default PostFormContainer(ReblogPostForm);
