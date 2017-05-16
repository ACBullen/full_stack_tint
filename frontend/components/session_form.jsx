import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.loggedIn){
      this.props.history.push('/');
    }
  }

  handleUsernameInput (e) {
    e.preventDefault();
    this.setState({ username: e.currentTarget.value });
  }

  handlePasswordInput (e) {
    e.preventDefault();
    this.setState({ password: e.currentTarget.value})
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemo (e) {

    e.preventDefault();
    this.props.demoSignIn();
  }

  render() {
    let type = this.props.formType;
    return (
      <div id='SessionForm'>
        <h2>{((type === '/login') ? "Sign In" : "Sign Up")}</h2>
        <lable> Username:
        <input type="text" value={this.state.username} onChange={this.handleUsernameInput}/>
        </lable>
        <lable>Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordInput}/>
        </lable>
        <div id="SignIn/Up/demo buttons">
          <button onClick={this.handleSubmit} type='button'>{(type === '/login') ? `Sign In` : `Sign Up` }</button>
          <button onClick={this.handleDemo} type="button">Demo Sign-In</button>
        </div>
        <div id="SF Footer">
          { type === '/login' ? (<Link to="/signup">Already have an account? Sign In!</Link>) : (
            <Link to='/login'>Need an account? Sign Up!</Link>) }
        </div>
    </div>
    )
  }
}

export default SessionForm;
