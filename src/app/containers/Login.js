import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction, USER_STATUS } from '../actions/LoginAction';
import { initFB } from '../ultis/Parse';
import FontAwesome from 'react-fontawesome';
import '../../css/Login.css';

class LoginContainer extends Component {
  componentWillMount() {
    initFB();
    let { userStatus, router } = this.props;
    if( userStatus === USER_STATUS.AUTHENTICATED )
        return router.push('/');
  }

  componentWillUpdate(nextProps, nextState) {
    let { userStatus, router } = nextProps;
    if( userStatus === USER_STATUS.AUTHENTICATED )
      return router.push('/');
  }

  onSubmit = (username, password) => {
    this.props.dispatch(loginAction(username, password));
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-modal">
          <FontAwesome name='user-circle-o' size='4x' className="Login-logo" inverse={true}/>
          <div className="markdown"><h1>Login</h1></div>
            <div className="Login-form">
                <div className="fb-login-button" data-max-rows="2" data-size="large" data-show-faces="false" data-auto-logout-link="true"></div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userStatus: state.loginState.USER_STATUS
  }
}

const Login = connect(
  mapStateToProps
)(LoginContainer);

export default Login;