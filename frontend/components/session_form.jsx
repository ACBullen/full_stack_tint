import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div id='SessionForm'>
        <lable> Username:
        <input type="text" />
        </lable>
        <lable>Password:
          <input type="password" />
        </lable>
        <div id="SignIn/Up/demo buttons">
          <button type='button'>SignIn/Up</button>
          <button type="button">Demo Sign-In</button>
        </div>
    </div>
    )
  }
}

export default SessionForm;
