import React, { Component } from 'react';
import HomeMenu from  '../components/MainMenu';

class Dashboard extends Component{
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-header">
          <HomeMenu />
        </div>
        <div className="Dashboard-body">
          <h1>DashBoard</h1>
        </div>
      </div> 
    )
  }
}

export default Dashboard;