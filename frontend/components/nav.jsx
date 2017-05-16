import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
    super(props)
    this.logMeOut = this.logMeOut.bind(this)
  }

  logMeOut(e){
    e.preventDefault();
    this.props.logOut();
  }

  render() {

    return (
      <div id="NavBar">
        <h1>T.I.N.T.</h1>
        <div>
          { this.props.currentUser.username ? `${this.props.currentUser.username}` : '' }
          { this.props.currentUser.username ? (
            <button onClick={this.logMeOut}>Log Out</button>) :(
              <Link to='/login'>Log In</Link>) }
        </div>
      </div>
    )
  }
}

export default Nav;
