import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavContainer from './nav_container';
//Separate h1 into a nav bar component with the related info in later
//refactoring.

const Main = ({store}) => (
  <div>
    <header>
      <NavContainer />
    </header>
    <div id="MainBody">
      <Route exact path= "/login" component={SessionFormContainer} />
      <Route path= "/signup" component={SessionFormContainer} />
    </div>
  </div>
)

export default Main;
