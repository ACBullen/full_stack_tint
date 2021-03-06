import React from 'react';
import PostFormContainer from './post_form_container'
import { withRouter, Link } from 'react-router-dom';


class LinkPostForm extends React.Component {
  constructor(props){
    super(props);

      if(this.props.post) {
        let post = Object.assign({}, this.props.post);
        post.created_at = undefined;
        post.id = undefined;
        post.media_type = "none";
        if(this.props.reblog && post.original_auth_id === undefined){
          post.original_auth_id = post.user_id,
          post.user_id = this.props.userId
        }
      this.state = post;
    } else {
      this.state = {
        title: '',
        body: '',
        link_url: '',
        media_link: '',
        post_type: 'link',
        media_type: 'none',
        user_id: this.props.userId
      };
    }
    this.base_path = this.props.match.params['base'];
    this.handleLinkInput = this.handleLinkInput.bind(this);
    this.handleDescInput = this.handleDescInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleLinkInput (e){
    this.setState({link_url: e.target.value})
  }

  handleDescInput(e) {
    this.setState({body: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    let post_props = this.state
    if (post_props.link_url.indexOf("www") === -1 && post_props.link_url.indexOf("http") === -1){
      post_props.link_url = `https://www.${post_props.link_url}`;
    }
    if(post_props.link_url.length < 5){
      alert('please input a valid link');
    } else {
      let target = this.base_path
      if (this.props.reblog){
        this.props.createPost(this.state).then(this.props.history.push(`/${target}`))
      } else {
        this.props.post ? (
          this.props.updatePost(this.props.post.id, this.state).then(this.props.history.push(`/${target}`))
        ): (this.props.createPost(this.state).then(this.props.history.push(`/${target}`)));
      }
    }
  }


  render(){
    return (
      <div id="PostForm" className="baseLozenge">
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
