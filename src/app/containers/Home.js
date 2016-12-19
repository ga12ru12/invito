import { connect } from 'react-redux';
import { loginAction } from '../actions/LoginAction';
import HomeComponent from '../components/HomeComponent';

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

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;