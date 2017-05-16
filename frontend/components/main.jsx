import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavContainer from './nav_container';
import { AuthRoute } from '../util/auth_util';
//Separate h1 into a nav bar component with the related info in later
//refactoring.

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.forceUpdate()
  }

  render () {
    return(
      <div>
        <header>
          <NavContainer />
        </header>
        <div id="MainBody">
          <AuthRoute exact path= "/login" component={SessionFormContainer} />
          <AuthRoute exact path= "/signup" component={SessionFormContainer} />
        </div>
      </div>
    )
  }
}


export default Main;
