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
    let type = this.props.formType;
    return (
      <div id='SessionForm'>
        <h2>{((type === '/login') ? "Sign In" : "Sign Up")}</h2>
        <lable> Username:
        <input type="text" />
        </lable>
        <lable>Password:
          <input type="password" />
        </lable>
        <div id="SignIn/Up/demo buttons">
          <button type='button'>{(type === '/login') ? `Sign In` : `Sign Up` }</button>
          <button type="button">Demo Sign-In</button>
        </div>
    </div>
    )
  }
}

export default SessionForm;
