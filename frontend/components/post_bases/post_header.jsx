import React from 'react';
import { connect } from 'react-redux';
import { createFollow, destroyFollow } from '../../actions/user_actions';
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/post_actions';

class PostHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      followed : this.props.followed,
      user : this.props.user,
      currentUser : this.props.currentUser,
      orAuth: this.props.orAuth
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      followed : newProps.followed,
      user : newProps.user,
      currentUser : newProps.currentUser
    })
  }

  handleFollowToggle(){

    if (this.state.followed){
      this.props.destroyFollow(this.state.user.id);

    } else {
      this.props.createFollow(this.state.user.id)

    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deletePost();
  }

  render(){
    let post = this.props.post;
    let fi = this.props.fi;
    return(
      <header id="PostHeader">
        <div id="phLeft">
        <img width="20px" height="20px" src={`${this.state.user.profile_pic}`}/>
        <h5>{this.state.orAuth ? <p>{this.state.user.username} <i className="fa fa-retweet" aria-hidden="true"></i> {`${this.state.orAuth.username}`} </p>: this.state.user.username}</h5> </div>
        <div>
        { this.state.currentUser.username ?
          (this.state.currentUser.id === this.state.user.id ? (
            <div id="authorOptions">
              <Link to={ fi === "true" ? (
                  `home/edit/quote/${post.id}`
                ) : (`feed/edit/quote/${post.id}`)}><button>Edit</button></Link>
              <button onClick={this.handleDelete.bind(this)}>Delete</button>

              </div>
          ) : (
          <button onClick={this.handleFollowToggle.bind(this)}>{this.state.followed ? "Unfollow ": "Follow"}</button>
        )) : "" }
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
  user: ownProps.user,
  currentUser: state.currentUser,
  followed: (state.currentUser.follows ? state.currentUser.follows.indexOf(ownProps.user.id) >= 0 : null),
  post: ownProps.post,
  fi: ownProps.fi,
  orAuth: ownProps.orAuth
}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  createFollow: (followee_id)=> dispatch(createFollow(followee_id)),
  destroyFollow: (followee_id) => dispatch(destroyFollow(followee_id)),
  deletePost: () => dispatch(deletePost(ownProps.post.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostHeader);
