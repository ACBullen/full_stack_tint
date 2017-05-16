import React from 'react';
import SessionFormContainer from './session_form_container';

//Separate h1 into a nav bar component with the related info in later
//refactoring.

const Main = ({store}) => (
  <div>
    <header>
      <h1>T.I.N.T.</h1>
    </header>
    <SessionFormContainer />
  </div>
)

export default Main;
