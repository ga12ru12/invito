import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import restaurantApp from './app/reducers/index';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './lib/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/index.css';

let store = createStore(restaurantApp);
const { getState } = store;

render(
  <Provider store={store}>
    <App getState={getState}/>
  </Provider>,
  document.getElementById('root')
);