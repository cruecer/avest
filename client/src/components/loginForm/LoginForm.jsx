import React, { Component } from 'react';
import { classNames } from '../../helper/style';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

const cn = classNames(require('./index.scss'));

class NormalLoginForm extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handler(values);
      }
    });
  }

  render() {
    const { isLoading } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item className={cn('centerBtn')}>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;