import React from 'react';
import PostFormContainer from 'post_form_container';


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
      original_auth_id: thisprops.post.original_auth_id || this.props.post.user_id,
      rb_post_id: this.props.post.id
    })
  }

  render() {

    return(
      <h1>REBLOGREBLOGREBLOG</h1>
    )
  }

}
