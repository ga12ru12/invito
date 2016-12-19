import React, { PureComponent } from 'react';
import { Icon, Tooltip } from 'antd';
import '../../css/components/MainInput.css'

class MainInput extends PureComponent{
  render() {
    return (
      <div className="main-input">
        <div className="title-input">
          <span>Make an invito....</span>
          <Tooltip placement="bottom" title="Add address">
            <Icon type="environment-o" className="main-icon"/>
          </Tooltip>

          <Tooltip placement="bottom" title="More invitee">
            <Icon type="team" className="main-icon"/>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default MainInput;