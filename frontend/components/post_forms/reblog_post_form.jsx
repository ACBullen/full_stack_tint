import React from 'react';
import PostFormContainer from './post_form_container';
import ImagePost from '../post_bases/image_post';
import LinkPost from '../post_bases/link_post';
import AudioPost from '../post_bases/audio_post';
import VideoPost from '../post_bases/video_post';
import QuotePost from '../post_bases/quote_post';
import TextPost from '../post_bases/text_post';
import ReblogPost from '../post_bases/reblog_post';
import { getAPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

class ReblogPostForm extends React.Component {
  constructor(props){
    super(props);


    let post = this.props.post || {};
    this.state = post;
    this.state.original_auth_id = this.state.original_auth_id || post.id;
    this.state.rb_post_id = post.id
    this.state.cur_comment = '';
    if(this.props.location.pathname.indexOf('edit') !== -1 && this.props.post){
      this.edit = true;
      let comments = this.state.comments.split("NEWLINE@#*$");
      this.state.cur_comment = comments[comments.length - 1];
      this.state.comments = comments.slice(0, comments.length - 2).join("NEWLINE@#*$");
    }


    this.status = "Fetching post..."
  }

  componentDidMount() {

    this.props.getAPost(this.props.match.params["id"]);

  }

  componentWillReceiveProps(newProps){

    let post = newProps.post || {}
    if (post.id === undefined) {
      this.status = "No such post"
    }

    if(this.props.location.pathname.indexOf('edit') !== -1 && newProps.post){
      this.edit = true;
      let comments = post.comments.split("NEWLINE@#*$");

      post.cur_comment = comments[comments.length - 1];
      post.comments = comments.slice(0, comments.length - 2).join("NEWLINE@#*$");

    }
    this.setState({
      id: post.id,
      title: post.title,
      body: post.body,
      link_url: post.link_url,
      media_link: post.media_link,
      post_type: post.post_type,
      media_type: post.media_type,
      user_id: newProps.userId,
      original_auth_id: post.original_auth_id || post.user_id,
      comments: post.comments,
      rb_post_id: post.id,
      cur_comment: post.cur_comment || ''
    })

  }

  contentDisplay(post){
    if (post.rb_post_id){
      return (
        <ReblogPost post={post} />
      )
    }

    switch (post.post_type){
    case "image":
      return <ImagePost post={post} />
    case "link":
      return <LinkPost post={post} />
    case "audio":
      return <AudioPost post={post} />
    case "video":
      return <VideoPost post={post} />
    case "text":
      return <TextPost post={post} />
    case "quote":
      return <QuotePost post={post} />
    default:
      return (<p>{post.id}</p>)
    }
  }

  handleInputComment(e){
    e.preventDefault();
    this.setState({cur_comment: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.cur_comment.length > 0){
      this.state.comments ? (this.state.comments = this.state.comments + `NEWLINE@#*$${this.props.currentUser.username}:NEWLINE@#*$ ${this.state.cur_comment}`
      ) : this.state.comments = `${this.props.currentUser.username}:NEWLINE@#*$ ${this.state.cur_comment}`
    }
    if (this.edit){
      let post_id = this.props.match.params["id"]
      this.props.updatePost(post_id, this.state).then(()=> this.props.history.goBack(1));
    } else {
      this.props.createPost(this.state).then(()=> this.props.history.goBack(1));
    }
  }

  backOut(e){
    e.preventDefault();
    this.props.history.goBack(1);
  }

  render() {
    if(this.state.id === undefined){
      return <div id="ReblogPostForm">{this.status}</div>
    } else {

      return (

        <div id="ReblogPostForm" className="baseLozenge">
          {this.contentDisplay(this.props.post)}
          <div id="RBInputs">
            <textarea placeholder="Add a comment(optional)" onChange={this.handleInputComment.bind(this)} value={this.state.cur_comment}></textarea>
          <div id="controlButtons">
            <button onClick={this.backOut.bind(this)}>Cancel</button>
            <button onClick={this.handleSubmit.bind(this)}>{this.edit ? "Edit" : "Reblog"}</button>
          </div>
        </div>
      </div>

      )
    }

  }

}

export default withRouter(PostFormContainer(ReblogPostForm));
