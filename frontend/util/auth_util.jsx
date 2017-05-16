import { Route, Redirect } from 'react-router-dom';
import { connect } from 'redux';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props)=>(
      !loggedIn ? (<Component {...props} /> ) : ( <Redirect to= '/' />)
    )} />
);

mapStateToProps = (state) => ({
  loggedIn: Boolean(state.currentUser.username)
});

export const AuthRoute = connect(mapStateToProps, null)(Auth);
