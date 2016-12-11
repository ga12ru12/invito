import React, { Component } from 'react';
import HomeMenu from '../components/HomeMenu';

class Kitchen extends Component{
  render(){
    return (
      <div className="Kitchen">
        <div className="Kitchen-header">
          <HomeMenu />
        </div>
        <div className="Kitchen-body">
          <h1>Kitchen</h1>
        </div>
      </div>
    )
  }
}

export default Kitchen;