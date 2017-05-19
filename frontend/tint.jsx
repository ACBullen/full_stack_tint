import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import App from './App'

// files brought in for testing purposes only. Remove when unneeded
// import * as APIUtilS from './util/session_api_util';
// import * as APIUtilP from './util/post_api_util';
// import { getPosts } from './actions/post_actions';
// import { requestCloudinaryKeys } from './actions/api_key_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    store = configureStore({currentUser: window.currentUser});
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<App store={store} />, root)
});
