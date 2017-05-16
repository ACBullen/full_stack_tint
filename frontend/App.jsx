import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Main from './components/main';


const App = ({store}) => {
return(
  <div>
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  </div>
)};

export default App;
