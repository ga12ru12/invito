import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import restaurantApp from './app/reducers/index';
import App from './app/App';
import './css/antd-custom/antd.min.css';
import './css/antd-custom/index.css';
import './lib/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/index.css';
import dotenv from 'dotenv';
import './app/ultis/Parse';

dotenv.config();

let store = createStore(restaurantApp);
const { getState } = store;

render(
  <Provider store={store}>
    <App getState={getState}/>
  </Provider>,
  document.getElementById('root')
);