import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './redux/reducers';


const store = createStore(rootReducer);


ReactDOM.render(
  
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,  
  document.getElementById('root')
);
