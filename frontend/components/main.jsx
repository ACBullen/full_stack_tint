import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavContainer from './nav_container';

import { AuthRoute, ProtectedRoute } from '../util/auth_util';
import FeedContainer from './feed_container';
import UserFeedContainer from './user_feed_container';


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



          <ProtectedRoute exact path='/feed' component={UserFeedContainer} />
          <Route path='/home' component={FeedContainer} />


          <AuthRoute path= "/login" component={SessionFormContainer} />
          <AuthRoute path= "/signup" component={SessionFormContainer} />

        </div>
      </div>
    )
  }
}


export default Main;
