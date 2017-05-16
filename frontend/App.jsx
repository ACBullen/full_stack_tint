import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Main from './components/main';


const App = ({store}) => {
  console.log("App rendering");
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
