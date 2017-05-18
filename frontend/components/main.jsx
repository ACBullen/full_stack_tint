import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavContainer from './nav_container';
import { AuthRoute } from '../util/auth_util';
import TextPostForm from './post_forms/text_post_form';
import QuotePostForm from './post_forms/quote_post_form';
import ImagePostForm from './post_forms/image_post_form';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {render: 0}

  }

  render () {
    return(
      <div>
        <header>
          <NavContainer />
        </header>
        <div id="MainBody">
          <Route path="/home" component={TextPostForm} />
          <Route path="/home" component={QuotePostForm} />
          <Route path="/home" component ={ImagePostForm} />

          <AuthRoute path= "/login" component={SessionFormContainer} />
          <AuthRoute path= "/signup" component={SessionFormContainer} />

        </div>
      </div>
    )
  }
}


export default Main;
