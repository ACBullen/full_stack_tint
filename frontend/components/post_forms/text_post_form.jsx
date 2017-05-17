import React from 'react';
import PFContainer from './post_form_container';

class TextPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: undefined,
      media_link: undefined,
      post_type: 'text',
      user_id: this.props.userId
    };
  }

  render() {
    return(
      <div id="TextPostForm">
        <lable>Title:
        <input type='text' value={this.state.title}/>
        </lable>
        <lable>Body:
          <textarea value={this.state.body}></textarea>
        </lable>
        <button type="button">Post</button>
      </div>
    )
  }

}

export default PFContainer(TextPostForm);
