import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu';
import MainInput from '../components/MainInput';
import '../../css/Home.css';

class HomeContainer extends Component {
  componentWillMount() {}
  
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <MainMenu />
        </div>
        <div className="Home-body">
          <MainInput />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userStatus: state.loginState.USER_STATUS
  }
}

const Home = connect(
  mapStateToProps
)(HomeContainer);

export default Home;