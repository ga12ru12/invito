import { connect } from 'react-redux';
import { registerAction } from '../actions/RegisterAction';
import RegisterComponent from '../components/RegisterComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    userStatus: state.loginState.USER_STATUS
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (username, password) => {
      dispatch(registerAction(username, password));
    }
  }
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

export default RegisterContainer;