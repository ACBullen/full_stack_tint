import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import PostDropdown from './post_dropdown';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.logMeOut = this.logMeOut.bind(this);
    this.showPostOptions = this.showPostOptions.bind(this);
  }

  logMeOut(e){
    e.preventDefault();
    this.props.logOut().then(() =>(
      this.props.history.push('/')
    ));
  }



  showPostOptions(e){
    e.preventDefault();

    let postForm = document.getElementById('PostDropdown');


    if (postForm.style.display === "none" || postForm.style.display === ''){
      postForm.style.display = 'inline-block';
    } else {
      postForm.style.display = 'none';

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

      <Link to="/home"><h1>T.I.N.T.</h1></Link>
        <div id="NavRight">
          { this.props.currentUser.username ?(
            <div id="currentUserInfo">
        <img width="20px" height="20px" src={`${this.props.currentUser.profile_pic}`}/>
            <Link to="/feed"><h3>{`${this.props.currentUser.username}`}</h3></Link>
            <button onClick={this.showPostOptions}>Post</button>
          </div>)
          : '' }
          { this.props.currentUser.username ? (
            <button onClick={this.logMeOut}>Log Out</button>) :(
              <Link to='/login'><button type="button">Sign In</button></Link>) }
          <PostDropdown />
        </div>
      </div>
    )
  }
}

export default Nav;
