import { connect } from 'react-redux';
import { loginAction } from '../actions/LoginAction';
import LoginComponents from '../components/LoginComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    userStatus: state.loginState.USER_STATUS
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (username, password) => {
      dispatch(loginAction(username, password));
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponents);

export default Login;