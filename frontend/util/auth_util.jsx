import { Route, Redirect, withRouter } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props)=>(
      !loggedIn ? (<Component {...props} /> ) : ( <Redirect to= '/' />)
    )} />
);

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.currentUser.username)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props)=>(
      loggedIn? (<Component {...props} /> ) : ( <Redirect to='/' />)
    )} />
);

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
