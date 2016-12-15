import React, { PureComponent } from 'react';
import { Button, Form, Input, Checkbox, Icon } from 'antd';
import FontAwesome from 'react-fontawesome';
import '../../css/Register.css';
const FormItem = Form.Item;

const NormalRegisterForm = Form.create()(React.createClass({
  getInitialState() {
    return {
      passwordDirty: false,
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  checkPassowrd(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Confirm passwords is wrong!');
    } else {
      callback();
    }
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form horizontal onSubmit={this.handleSubmit} className="Register-form">
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: 'Please input your username!',
            }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" onBlur={this.handlePasswordBlur} />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassowrd,
            }],
          })(
            <Input addonBefore={<Icon type="unlock" />} type="password" placeholder="Confirm Password" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input addonBefore={<Icon type="mail" />} placeholder="Email"/>
          )}
        </FormItem>
        <FormItem className="Register-agrement">
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
            rules: [{
              required: true, message: 'Please agree with our agreement!',
            }],
          })(
            <Checkbox>I had read the <a>agreement</a></Checkbox>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large" className="Register-form-button">Register</Button>
        </FormItem>
      </Form>
    );
  },
}));

class Register extends PureComponent {
  componentWillMount() {
    // let { userStatus, router } = this.props;
  }

  componentWillUpdate(nextProps, nextState) {
    // let { userStatus, router } = nextProps;
    // if( userStatus === USER_STATUS.AUTHENTICATED )
    //   return router.push('/');
  }

  render() {
    return (
      <div className="Register">
        <div className="Register-modal">
          <FontAwesome name='user-circle-o' size='4x' className="Register-logo" inverse={true}/>
          <div className="markdown"><h1>Register</h1></div>
          <NormalRegisterForm onSubmit={this.props.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default Register;