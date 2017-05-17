import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavContainer from './nav_container';
import { AuthRoute } from '../util/auth_util';
import TextPostForm from './post_forms/text_post_form';


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

          <TextPostForm />

          <switch>
          <AuthRoute path= "/login" component={SessionFormContainer} />
          <AuthRoute path= "/signup" component={SessionFormContainer} />
          </switch>
        </div>
      </div>
    )
  }
}


export default Main;
