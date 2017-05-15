import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// files brought in for testing purposes only. Remove when unneeded
import * as APIUtilS from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    store = configureStore({currentUser: window.currentUser});
  } else {
    store = configureStore();
  }
  window.store = store;
  window.APIUtilS = APIUtilS;
  ReactDOM.render(<h1>Tint Test</h1>, root)
});
