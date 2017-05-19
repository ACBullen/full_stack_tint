import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavContainer from './nav_container';

import { AuthRoute, ProtectedRoute } from '../util/auth_util';
import TextPostForm from './post_forms/text_post_form';
import QuotePostForm from './post_forms/quote_post_form';
import ImagePostForm from './post_forms/image_post_form';
import AudioPostForm from './post_forms/audio_post_form';
import VideoPostForm from './post_forms/video_post_form';
import LinkPostForm from './post_forms/link_post_form';
import FeedContainer from './feed_container';


class Main extends React.Component {
  constructor(props){
    super(props);


  }

  render () {
    return(
      <div>
        <header>
          <NavContainer />
        </header>
        <div id="MainBody">


          <ProtectedRoute exact path="/post/text" component={TextPostForm} />
          <ProtectedRoute exact path="/post/quote" component={QuotePostForm} />
          <ProtectedRoute exact path="/post/image" component={ImagePostForm} />
          <ProtectedRoute exact path='/post/audio' component={AudioPostForm} />
          <ProtectedRoute exact path='/post/video' component={VideoPostForm} />
          <ProtectedRoute exact path='/post/link' component={LinkPostForm} />
          <Route path='/home' component={FeedContainer} />


          <AuthRoute path= "/login" component={SessionFormContainer} />
          <AuthRoute path= "/signup" component={SessionFormContainer} />

        </div>
      </div>
    )
  }
}


export default Main;
