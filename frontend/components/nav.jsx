import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import {  ProtectedRoute } from '../util/auth_util';

import PostDropdown from './post_dropdown';
import TextPostForm from './post_forms/text_post_form';
import QuotePostForm from './post_forms/quote_post_form';
import ImagePostForm from './post_forms/image_post_form';
import AudioPostForm from './post_forms/audio_post_form';
import VideoPostForm from './post_forms/video_post_form';
import LinkPostForm from './post_forms/link_post_form';


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
        <ProtectedRoute exact path="/:base/post/text" component={TextPostForm} />
        <ProtectedRoute exact path="/:base/post/quote" component={QuotePostForm} />
        <ProtectedRoute exact path="/:base/post/image" component={ImagePostForm} />
        <ProtectedRoute exact path='/:base/post/audio' component={AudioPostForm} />
        <ProtectedRoute exact path='/:base/post/video' component={VideoPostForm} />
        <ProtectedRoute exact path='/:base/post/link' component={LinkPostForm} />

        <ProtectedRoute exact path='/:base/edit/quote/:id' component={QuotePostForm} />
        <ProtectedRoute exact path='/:base/edit/text/:id' component={TextPostForm} />
        <ProtectedRoute exact path='/:base/edit/image/:id' component={ImagePostForm} />
        <ProtectedRoute exact path='/:base/edit/audio/:id' component={AudioPostForm} />
        <ProtectedRoute exact path='/:base/edit/video/:id' component={VideoPostForm} />
        <ProtectedRoute exact path='/:base/edit/link/:id' component={LinkPostForm} />
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
              <div id="signin"><Link to='/login'><button type="button">Sign In</button></Link></div>) }
          <PostDropdown />
        </div>
      </div>
    )
  }
}

export default Nav;
