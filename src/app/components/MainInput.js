import React, { PureComponent } from 'react';
import { Icon, Tooltip } from 'antd';
import MainPopup from './MainPopup';
import '../../css/components/MainInput.css'

class MainInput extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      isDefault: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isDefault: !prevState.isDefault
    }));
  }
  render() {
    var heightInput = {
      height: 48
    }
    var defaultInput = (
      <div className="title-input" onClick={this.handleClick}>
        <span>Make an invito....</span>
        <Tooltip placement="bottom" title="Add address">
          <Icon type="environment-o" className="main-icon"/>
        </Tooltip>

        <Tooltip placement="bottom" title="More invitee">
          <Icon type="team" className="main-icon"/>
        </Tooltip>
      </div>
    );
    if(!this.state.isDefault){
      defaultInput = <MainPopup />
      heightInput.height = 450;
    }
    return (
      <div className="main-input" style={heightInput}>
        {defaultInput}
      </div>
    );
  }
}

export default MainInput;