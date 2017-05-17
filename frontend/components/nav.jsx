import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
    this.showPost = this.showPost.bind(this);
  }

  logMeOut(e){
    e.preventDefault();
    this.props.logOut();
  }

  showPost(e){
    e.preventDefault();

    let postForm = document.getElementById('TextPostForm');
    console.log(postForm.style);
    if (postForm.style.display === ""){
      postForm.style.display = 'flex';
    } else {
      postForm.style.display = '';
    }
  }

  render() {

    return (
      <div id="NavBar">
        <Route exact path="/" render={()=>{
            return (this.props.currentUser.username) ? (<Redirect to="/home" />) :(
              <Redirect to="/signup" />
            )
          }
        } />

        <h1>T.I.N.T.</h1>
        <div>
          { this.props.currentUser.username ?(
            <div id="currentUserInfo">
        <img width="20px" height="20px" src={`${this.props.currentUser.profile_pic}`}/>
            <h3>{`${this.props.currentUser.username}`}</h3>
            <button onClick={this.showPost}>Post</button>
          </div>)
          : '' }
          { this.props.currentUser.username ? (
            <button onClick={this.logMeOut}>Log Out</button>) :(
              <Link to='/login'><button type="button">Sign In</button></Link>) }
        </div>
      </div>
    )
  }
}

export default Nav;
