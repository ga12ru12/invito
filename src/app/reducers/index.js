import { combineReducers } from 'redux';
import loginState from './LoginReducer';

const restaurantApp = combineReducers({
  loginState
})

export default restaurantApp;