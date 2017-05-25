import React from 'react';
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { likePost, unlikePost, deletePost } from '../../actions/post_actions';

class PostFooter extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      post: this.props.post,
      currentUser: this.props.currentUser,
      liked: this.props.liked
    })
  }

  componentWillReceiveProps(newProps){

    this.setState({
      post: newProps.post,
      currentUser: newProps.currentUser,
      liked: newProps.liked
    })
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost();
  }

  handleLikeToggle () {
    this.state.liked ? this.props.unlikePost() : this.props.likePost()
  };

  renderLikeButton() {
    if (this.state.currentUser.id) {
      return(
        <div id="pfRight">
          {this.state.liked ? (
            <i className="fa fa-heart" onClick={this.handleLikeToggle.bind(this)} aria-hidden="true"></i>
        ) : (
            <i className="fa fa-heart-o" onClick={this.handleLikeToggle.bind(this)} aria-hidden="true"></i>
          ) }

        </div>
      )
    } else {
      return (
        <div id="pfRight"></div>
      )
    }
  }

  render() {
    let authorId= this.state.post.user_id;
    let currentUserId = this.state.currentUser.id;
    let post = this.state.post;
    let fi = this.props.fi;
    return(
      <div id="PostFooter">
        <div id="pfLeft">
          <h4>{this.state.post.likes.length === 1 ? `${this.state.post.likes.length} like` : `${this.state.post.likes.length} likes` }</h4>
        </div>
        {this.renderLikeButton()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.currentUser,
  post: ownProps.post,
  fi: ownProps.fi,
  liked: ownProps.post.likes.indexOf(state.currentUser.id) > -1
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: ()=> dispatch(likePost(ownProps.post.id)),
  unlikePost: () => dispatch(unlikePost(ownProps.post.id)),
  deletePost: () => dispatch(deletePost(ownProps.post.id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFooter));
