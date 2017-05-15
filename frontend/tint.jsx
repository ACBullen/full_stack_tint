import React from 'react';
import ReactDOM from 'react-dom';

// files brought in for testing purposes only. Remove when unneeded
import * as APIUtilS from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.APIUtilS = APIUtilS;
  ReactDOM.render(<h1>Tint Test</h1>, root)
});
