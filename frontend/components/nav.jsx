import React from 'react';

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
          { this.props.currentUser.username ? <button onClick={this.logMeOut}>Log Out</button> : '' }
        </div>
      </div>
    )
  }
}

export default Nav;
