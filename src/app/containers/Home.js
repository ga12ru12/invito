import React, { Component } from 'react';
import HomeMenu from '../components/HomeMenu';
import '../../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <HomeMenu />
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;