import React from 'react';
import { connect } from 'react-redux';
import { createFollow, destroyFollow } from '../../actions/user_actions';

class PostHeader extends React.Component {
  constructor(props){
    super(props)
  }

  handleFollowToggle(){

    if (this.props.followed){
      this.props.destroyFollow(this.props.user.id);

    } else {
      this.props.createFollow(this.props.user.id)

    }
  }

  render(){

    return(
      <header id="PostHeader">
        <img width="20px" height="20px" src={`${this.props.user.profile_pic}`}/>
        <h5>{this.props.user.username}</h5>
        <button onClick={this.handleFollowToggle.bind(this)}>{this.props.followed ? "Unfollow ": "Follow"}</button>
      </header>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  currentUser: state.currentUser,
  followed: (state.currentUser.follows.indexOf(ownProps.user.id) >= 0)
})

const mapDispatchToProps = (dispatch) => ({
  createFollow: (followee_id)=> dispatch(createFollow(followee_id)),
  destroyFollow: (followee_id) => dispatch(destroyFollow(followee_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostHeader);
