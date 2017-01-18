import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu';
import { Steps, Button, message, Row, Col, Icon, Tooltip, Switch, Input } from 'antd';
const Step = Steps.Step;
const Search = Input.Search;
import '../../css/Home.css';
import '../../css/components/MainInput.css'
import '../../css/components/MainPopup.css';

const steps = [{
  title: '1'
}, {
  title: '2'
}, {
  title: '3'
}];

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isDefault: true
    };
  }

  componentWillMount() {}

  handleClick = () => {
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
    // Main Popup
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
            Add new or select an party location.
            You can always edit the location in the setting.
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
            Add new or select the friends, who you want to invite.
            You can always edit the friends in the setting.
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
            Add more information for the party.
            Those information will be shared with all guests.
          </div>
        </div>
      )
    ];
    const bodyContent = [
      (
        <div className="content-body-1">
          <section className="markdown">
            <h2 className="title">Choose location</h2>
          </section>
          <div className="content-main">
            <div className="content-choose-address">
              <Search placeholder="input search text" onSearch={value => console.log(value)} className="search-address"/>
              <div className="list-address">
                <div className="address-detail">
                  <div className="address-title">Enouvo</div>
                  <div className="address-location">84 Cao Xuan Duc, Da Nang</div>
                </div>
                <div className="address-detail">
                  <div className="address-title">Enouvo</div>
                  <div className="address-location">84 Cao Xuan Duc, Da Nang</div>
                </div>
                <div className="address-detail">
                  <div className="address-title">Enouvo</div>
                  <div className="address-location">84 Cao Xuan Duc, Da Nang</div>
                </div>
                <div className="address-detail">
                  <div className="address-title">Enouvo</div>
                  <div className="address-location">84 Cao Xuan Duc, Da Nang</div>
                </div>
                <div className="address-detail">
                  <div className="address-title">Enouvo</div>
                  <div className="address-location">84 Cao Xuan Duc, Da Nang</div>
                </div>
              </div>
            </div>
            <div className="content-divider"></div>
            <div className="content-add-new-address">

            </div>
          </div>
        </div>
      ),
      (
        <div className="content-body-2">
          <section className="markdown">
            <h2 className="title">Choose location</h2>
          </section>
          <div>
            <div>
              <Switch checkedChildren={'Add new location'} unCheckedChildren={'Choose exist location'} />
            </div>
          </div>
        </div>
      ),
      (
        <div className="content-body-3">
          <section className="markdown">
            <h2 className="title">Choose location</h2>
          </section>
          <div>
            <div>
              <Switch checkedChildren={'Add new location'} unCheckedChildren={'Choose exist location'} />
            </div>
          </div>
        </div>
      )
    ];

    // Main Input
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
      defaultInput = (
        <div className="main-popup">
          <Row>
            <Col span={16}>
              <div className="popup-content">
                <div className="popup-body">
                  {bodyContent[this.state.current]}
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
      heightInput.height = 450;
    }

    return (
      <div className="Home">
        <div className="Home-header">
          <MainMenu />
        </div>
        <div className="Home-body">
          <div className="main-input" style={heightInput}>
            {defaultInput}
          </div>
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