import React from 'react';
import { connect } from 'react-redux';
import { createFollow, destroyFollow } from '../../actions/user_actions';

class PostHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      followed : this.props.followed,
      user : this.props.user,
      currentUser : this.props.currentUser
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

  render(){

    return(
      <header id="PostHeader">
        <img width="20px" height="20px" src={`${this.state.user.profile_pic}`}/>
        <h5>{this.state.user.username}</h5>
        { this.state.currentUser.username ?
          (this.state.currentUser.id === this.state.user.id ? "" : (
          <button onClick={this.handleFollowToggle.bind(this)}>{this.state.followed ? "Unfollow ": "Follow"}</button>
        )) : ""}

      </header>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
  user: ownProps.user,
  currentUser: state.currentUser,
  followed: (state.currentUser.follows ? state.currentUser.follows.indexOf(ownProps.user.id) >= 0 : null)
}
}
const mapDispatchToProps = (dispatch) => ({
  createFollow: (followee_id)=> dispatch(createFollow(followee_id)),
  destroyFollow: (followee_id) => dispatch(destroyFollow(followee_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostHeader);
