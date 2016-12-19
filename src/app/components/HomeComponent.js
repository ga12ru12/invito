import React, { PureComponent } from 'react';
import MainMenu from './MainMenu';
import MainInput from './MainInput';
import '../../css/Home.css';

class Home extends PureComponent {
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
    );
  }
}

export default Home;