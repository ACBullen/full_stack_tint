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

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleInput(e) {
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  handleBodyInput(e) {
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit (e){
    e.preventDefault();
    if (this.state.title.length < 3) {
      alert("Must have  a title of at least 3 characters");
    } else {
      this.props.createPost(this.state);
    }
  }

  render() {
    return(
      <div id="TextPostForm">
        <lable>Title:
        <input onChange={this.handleTitleInput} type='text' value={this.state.title}/>
        </lable>
        <lable>Body:
          <textarea onChange={this.handleBodyInput} value={this.state.body}></textarea>
        </lable>
        <button onClick={this.handleSubmit} type="button">Post</button>
      </div>
    )
  }

}

export default PFContainer(TextPostForm);
