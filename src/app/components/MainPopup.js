import React, {PureComponent} from 'react';
import { Steps, Button, message, Row, Col, Icon } from 'antd';
const Step = Steps.Step;
import '../../css/components/MainPopup.css';

const steps = [{
  title: '1'
}, {
  title: '2'
}, {
  title: '3'
}];

class MainPopup extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
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
    const { current } = this.state;
    const stepContent = [
      (
        <div className="content-step-1">
          <Icon type="environment-o" />
          <div className="title">
            <section className="markdown">
              <h3>Choose location</h3>
            </section>
          </div>
          <div className="description">
            Add new or select an party location. You can always edit the location in the setting.
          </div>
        </div>
      ),
      (
        <div className="content-step-2">
          <Icon type="team" />
          <div className="title">
            <section className="markdown">
              <h3>Invite friends</h3>
            </section>
          </div>
          <div className="description">
            Add new or select the friends, who you want to invite. You can always edit the friends in the setting.
          </div>
        </div>
      ),
      (
        <div className="content-step-3">
          <Icon type="calendar" />
          <div className="title">
            <section className="markdown">
              <h3>More Imfomation</h3>
            </section>
          </div>
          <div className="description">
            Add more information for the party. Those information will be shared with all guests.
          </div>
        </div>
      )
    ];
    return (
      <div className="main-popup">
        <Row>
          <Col span={16}>
            <div className="popup-content">
              <div className="popup-body">
                <section className="markdown">
                  <h2 className="title">Choose location</h2>
                </section>
              </div>
              <div className="popup-footer">
                <div className="steps-action">
                  {
                    this.state.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} type="ghost" onClick={() => this.prev()}>
                      Previous
                    </Button>
                  }
                  {
                    this.state.current < steps.length - 1
                    &&
                    <Button type="primary" onClick={() => this.next()}>Next</Button>
                  }
                  {
                    this.state.current === steps.length - 1
                    &&
                    <Button type="primary" onClick={() => message.success('Invito is sending!')}>Done</Button>
                  }
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="popup-step">
              <div className="popup-step-title">
                <Steps current={current}>
                  {steps.map(item => <Step key={item.title} />)}
                </Steps>
              </div>
              <div className="popup-step-body">
                {stepContent[this.state.current]}
              </div>
              <div className="popup-step-footer">

              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainPopup;