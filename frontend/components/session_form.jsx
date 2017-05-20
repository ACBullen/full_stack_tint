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
      this.props.history.push('/home');
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
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
      <div id="FormConcerns">
        <div id="greeting">
        {type === '/signup' ? (
          <p> Welcome to T.I.N.T., the micro-blogging app of the modern day! Looking to share an interesting thought, an insightful quite, an amazing video, or hilarious image? We've got you covered! Sign up or select Demo Sign-In for a taste of the platform</p>
        ) : ""}</div>
      <div id='SessionForm' className="baseLozenge">
          <div id="SFHeader">
            <h2>{((type === '/login') ? "Sign In" : "Sign Up")}</h2>
          </div>
          <lable> Username:
          <input type="text" value={this.state.username} onChange={this.handleUsernameInput}/>
          </lable>
          <lable>Password:
            <input type="password" value={this.state.password} onChange={this.handlePasswordInput}/>
            <ul id='authErrors'>
              {this.props.errors && this.props.errors.responseJSON ? this.props.errors.responseJSON.map((err, idx)=> <li key={idx}>{err}</li>) : ''}
            </ul>
          </lable>
          <div id="SignIn-Up-demo-buttons">
            <button onClick={this.handleSubmit} type='button'>{(type === '/login') ? `Sign In` : `Sign Up` }</button>
            <button onClick={this.handleDemo} type="button">Demo Sign-In</button>
          </div>
          <div id="SFFooter">
            { type === '/login' ? (<Link to='/signup'>Need an account? Sign Up!</Link>) : (
              <Link to="/login">Already have an account? Sign In!</Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;
