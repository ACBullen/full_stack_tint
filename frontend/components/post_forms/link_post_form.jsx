import React from 'react';
import PostFormContainer from './post_form_container'
import { withRouter, Link } from 'react-router-dom';


class LinkPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'link',
      media_type: '',
      user_id: this.props.userId
    };
    this.cur_path = this.props.location.pathname;
    this.base_path = this.cur_path.slice(0, this.cur_path.indexOf("/post"));
    this.handleLinkInput = this.handleLinkInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.requestCloudinaryKeys();
  }

  handleLinkInput (e){
    this.setState({link_url: e.target.value})
  }

  handleDescInput(e) {
    this.setState({body: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.link_url.length < 5){
      alert('please input a valid link');
    } else {
      let target = this.base_path
      if (this.base_path === "/home"){
        target = '/'
      }
      this.props.createPost(this.state).then(()=> this.props.history.push(`${target}`));
    }
  }


  render(){
    return (
      <div id="LinkPostForm" className="baseLozenge">
        <form id="LinkPostInputs">
        <input onChange={this.handleLinkInput} value={this.state.link_url} type="text" placeholder="Link content here" />
        <input onChange={this.handleDescInput} value={this.state.body} type="text" placeholder="Give the link a description" />
        <div id="controlButtons">
          <Link to={`${this.base_path}`}><button type="button">Close</button></Link>
          <button onClick={this.handleSubmit} type="button">Post</button>
        </div>
        </form>
      </div>
    )
  }
}

export default withRouter(PostFormContainer(LinkPostForm));
