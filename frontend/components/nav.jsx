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
          { this.props.currentUser.username ?(
            <div>
        <img width="20px" height="20px" src={`${this.props.currentUser.profile_pic}`}/>
            <h3>{`${this.props.currentUser.username}`}</h3>
          </div>)
          : '' }
          { this.props.currentUser.username ? (
            <button onClick={this.logMeOut}>Log Out</button>) :(
              <Link to='/login'><button type="button">Sign In</button></Link>) }
        </div>
      </div>
    )
  }
}

export default Nav;
