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

    let post = this.props.post || {}
    this.state = ({
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'reblog',
      media_type: 'none',
      user_id: this.props.userId,
      original_auth_id: post.original_auth_id || post.user_id,
      rb_post_id: post.id
    })
  }

  componentDidMount() {

    this.props.getAPost(this.props.match.params["id"]);

  }

  componentWillReceiveProps(newProps){

    let post = newProps.post || {}
    this.setState({
      title: '',
      body: '',
      link_url: '',
      media_link: '',
      post_type: 'reblog',
      media_type: 'none',
      user_id: newProps.userId,
      original_auth_id: post.original_auth_id || post.user_id,
      rb_post_id: post.id
    })
  }

  contentDisplay(post){

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
    case "reblog":
      return (<ReblogPost post={post} />)
    default:
      return (<p>{post.id}</p>)
    }
  }

  handleInputComment(e){
    e.preventDefault();
    this.setState({body: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.body.length > 0){
      this.state.body =`${this.props.currentUser.username}: ${this.state.body}`
    }
    this.props.createPost(this.state).then(()=> this.props.history.push('/feed'))
  }

  render() {
    if(this.props.post === undefined){
      return <p>Fetching post</p>
    } else {
      return (

        <div id="ReblogPostForm" className="baseLozenge">
          {this.contentDisplay(this.props.post)}
          <div id="RBInputs">
            <textarea placeholder="Add a comment(optional)" onChange={this.handleInputComment.bind(this)} value={this.state.body}></textarea>
            <button onClick={this.handleSubmit.bind(this)}>Reblog</button>
        </div>
      </div>

      )
    }

  }

}

export default withRouter(PostFormContainer(ReblogPostForm));
