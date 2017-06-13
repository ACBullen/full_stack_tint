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
      <div id="sessionPage">
        <h1>
          This<br />
           Is<br />
          Not<br />
          Tumblr<br />
        </h1>
      <div id="FormConcerns">

        {type === '/signup' ? (
      <div id="greeting">
          <p> Welcome to T.I.N.T., the micro-blogging app of the modern
            day! Looking to share an interesting thought, an insightful
            quote, an amazing video, or hilarious image? We've got you
            covered! See a post you like? Click Like<i id="example" className="fa fa-heart-o" aria-hidden="true"></i> or Reblog<i className="fa fa-retweet" aria-hidden="true"></i> to let your
            friends know! Sign up or select Demo Sign-In for a taste of
            the platform.</p>
          <h2>T. I. N. T</h2></div>
        ) : ""}
      <div id='SessionForm' className={type === '/signup' ? `baseLozenge signup` : "baseLozenge"}>

            {((type === '/login') ? <div id="SFHeader"><h2>Sign In</h2></div> : "")}


          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameInput}/>


            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordInput}/>
            <ul id='authErrors'>
              {this.props.errors && this.props.errors.responseJSON ? this.props.errors.responseJSON.map((err, idx)=> <li key={idx}>{err}</li>) : ''}
            </ul>

          <div id="SignIn-Up-demo-buttons">
            <button onClick={this.handleSubmit} type='button'>{(type === '/login') ? `Sign In` : `Sign Up` }</button>
            <button onClick={this.handleDemo} type="button">Demo Sign-In</button>
          </div>
          <div id="SFFooter">
            { type === '/login' ? (<Link to='/signup'>Need an account? Sign Up!</Link>) : (
              ''
            )}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default SessionForm;
