import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Orders from './containers/Orders';
import Kitchen from './containers/Kitchen';
import { USER_STATUS } from './actions/LoginAction';
import { initParse } from './ultis/Parse';

class App extends Component {
  constructor() {
    super();
    initParse();

    this.authenHandler = this.authenHandler.bind(this);

    this.routes = (
      <Route path="/">
        <IndexRoute component={Home} onEnter={this.authenHandler}/>
        <Route path="login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="dashboard" component={Dashboard} onEnter={this.authenHandler}/>
        <Route path="orders" component={Orders} onEnter={this.authenHandler}/>
        <Route path="kitchen" component={Kitchen} onEnter={this.authenHandler}/>
      </Route>
    );
  }

  componentWillMount(){

  }
  
  authenHandler(nextState, replace, callback) {
    const {getState} = this.props;
    const state = getState();
    if(state.loginState.USER_STATUS === USER_STATUS.ANONYMOUS){
      replace('/login');
    }
    callback();
  }

  render() {
    return (
      <Router history={browserHistory}>
        {this.routes}
      </Router>
    );
  }
}

export default App;
