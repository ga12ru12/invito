import React, { PureComponent } from 'react';
import { Icon, Tooltip, Steps, Button, message } from 'antd';
import '../../css/components/MainInput.css'
const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];

class MainInput extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      isDefault: true,
      current: 0,
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isDefault: !prevState.isDefault
    }));
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
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
    const { current } = this.state;
    if(!this.state.isDefault){
      defaultInput = (
        <div>
          <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
          </Steps>
          <div className="steps-content">{steps[this.state.current].content}</div>
          <div className="steps-action">
              {
                  this.state.current < steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                  this.state.current === steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
              {
                  this.state.current > 0
                  &&
                  <Button style={{ marginLeft: 8 }} type="ghost" onClick={() => this.prev()}>
                    Previous
                  </Button>
              }
          </div>
        </div>
      );
    }
    return (
      <div className="main-input">
        {defaultInput}
      </div>
    );
  }
}

export default MainInput;