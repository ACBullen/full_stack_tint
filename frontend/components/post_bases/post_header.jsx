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
      currentUser : newProps.currentUser,
      orAuth: newProps.orAuth
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
    let display_name;
    if (this.state.user.username.length >= 12 && this.state.currentUser.username === this.state.user.username && fi === "true"){
      display_name = `${this.state.user.username.slice(0,9)}...`;
    } else {
      display_name= this.state.user.username;
    }
    let editLocation;
    if (this.props.post.rb_post_id) {
      editLocation = `/edit/reblog/${post.id}`
    } else {
      fi === "true" ? (
        editLocation = `/home/edit/${post.post_type}/${post.id}`
      ) : ( editLocation = `/feed/edit/${post.post_type}/${post.id}`)
    }

    return(
      <header id="PostHeader">
        <div id="phLeft">
        <img width="20px" height="20px" src={`${this.state.user.profile_pic}`}/>

        {this.state.orAuth ? <h5>{display_name} <i className="fa fa-retweet" aria-hidden="true"></i> {`${this.state.orAuth.username}`} </h5>: <h5>{`${display_name}`}</h5>} </div>

        <div>
        { this.state.currentUser.username ?
          (this.state.currentUser.id === this.state.user.id ? (
            <div id="authorOptions">
              <Link to={editLocation}><button>Edit</button></Link>
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
