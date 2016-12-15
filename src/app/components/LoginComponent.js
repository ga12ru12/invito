import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input, Checkbox, Icon } from 'antd';
import FontAwesome from 'react-fontawesome';
import '../../css/Login.css';
import { USER_STATUS } from '../actions/LoginAction';
const FormItem = Form.Item;

const NormalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onSubmit(values.username, values.password);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="Login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
        <div>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox className="Login-rememberMe">Remember me</Checkbox>
          )}
          <a className="Login-form-forgot">Forgot password</a>
        </div>
        <div>
          <Button type="primary" htmlType="submit" className="Login-form-button">
            Log in
          </Button>
        </div>
        <div>
          Or <Link to="/register">register now!</Link>
        </div>
        </FormItem>
      </Form>
    );
  }
}));

class Login extends PureComponent {
  componentWillMount() {
    let { userStatus, router } = this.props;
    if( userStatus === USER_STATUS.AUTHENTICATED )
      return router.push('/');
  }

  componentWillUpdate(nextProps, nextState) {
    let { userStatus, router } = nextProps;
    if( userStatus === USER_STATUS.AUTHENTICATED )
      return router.push('/');
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-modal">
          <FontAwesome name='user-circle-o' size='4x' className="Login-logo" inverse={true}/>
          <div className="markdown"><h1>Login</h1></div>
          <NormalLoginForm onSubmit={this.props.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default Login;