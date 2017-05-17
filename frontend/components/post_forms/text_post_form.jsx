import React from 'react';
import PFContainer from './post_form_container';

class TextPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      post:{
        title: '',
        body: '',
        link_url: undefined,
        media_link: undefined,
        post_type: 'text',
        user_id: this.props.userId
      }
    };

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleBodyInput = this.handleBodyInput.bind(this);
    this.showLinkInput = this.showLinkInput.bind(this);
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
      this.props.createPost(this.state.post).then(()=> (
        this.setState({
          post:{
            title: '',
            body: '',
            link_url: undefined,
            media_link: undefined,
            post_type: 'text',
            user_id: this.props.userId
          }
        })
      ));
    }
  }

  showLinkInput(e){
    let linkInput = document.getElementById("additionalLink");

    if (linkInput.style.display === ""){
      linkInput.style.display = 'flex';
    } else {
      linkInput.style.display = '';
    }

  }

  render() {
    return(
      <div id="TextPostForm" className='baseLozenge'>
        <lable>Title:
        <input onChange={this.handleTitleInput} type='text' placeholder="Your title here!" value={this.state.title}/>
        <i className="fa fa-link" aria-hidden="true" onClick={this.showLinkInput}></i>
        </lable>
        <lable id="additionalLink"><i className="fa fa-link" aria-hidden="true"></i>
        <input type="text" placeholder="Input link here!" />
        </lable>
        <lable>Body:
          <textarea onChange={this.handleBodyInput} placeholder="Your text here!" value={this.state.body}></textarea>
        </lable>
        <button onClick={this.handleSubmit} type="button">Post</button>
      </div>
    )
  }

}

export default PFContainer(TextPostForm);
