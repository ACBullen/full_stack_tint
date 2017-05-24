import React from 'react';
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { likePost, unlikePost, deletePost } from '../../actions/post_actions';

class PostFooter extends React.Component {
  constructor(props){
    super(props);
    console.log("current user:", this.props.currentUser.id);
    console.log("post likes:", this.props.post.likes);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost();
  }

  handleLikeToggle () {
    console.log("hit");
    this.props.post.likes.indexOf(this.props.currentUser.id) > -1 ? (
      this.props.unlikePost()
    ) : (
      this.props.likePost()
    )
  };

  render() {
    let authorId= this.props.post.user_id;
    let currentUserId = this.props.currentUser.id;
    let post = this.props.post;
    let fi = this.props.fi;
    return(
      <div id="PostFooter">
        {post.likes.indexOf(currentUserId) > -1 ? (
          <i className="fa fa-heart" onClick={this.handleLikeToggle.bind(this)} aria-hidden="true"></i>
      ) : (
          <i className="fa fa-heart-o" onClick={this.handleLikeToggle.bind(this)} aria-hidden="true"></i>
        ) }

        {currentUserId === authorId ? (
          <div id="authorOptions">
            <Link to={ fi === "true" ? (
                `home/edit/quote/${post.id}`
              ) : (`feed/edit/quote/${post.id}`)}><button>Edit</button></Link>
            <button onClick={this.handleDelete.bind(this)}>Delete</button>

            </div>
        ) : ("")}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.currentUser,
  post: ownProps.post,
  fi: ownProps.fi
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  likePost: ()=> dispatch(likePost(ownProps.post.id)),
  unlikePost: () => dispatch(unlikePost(ownProps.post.id)),
  deletePost: () => dispatch(deletePost(ownProps.post.id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFooter));
