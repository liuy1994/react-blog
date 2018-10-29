import React, { Component } from 'react'
import request from '../services/request'
import { Form, Input, Button } from 'antd'
import './login.less'
const FormItem = Form.Item

class SignUp extends Component {
    login() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                request.login(values)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <Form>
                    <FormItem label="用户名">
                        {getFieldDecorator('name', {
                            initialValue: '测试444444',
                            rules: [{ required: true, message: 'Please input your name!', }],
                        })(<Input placeholder="请输入用户名"></Input>)}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password', {
                            initialValue: '12345678',
                            rules: [{ required: true, message: 'Please input your password!', }],
                        })(<Input placeholder="密码"></Input>)}
                    </FormItem>
                    <FormItem label="">
                        <Button type="primary" onClick={this.login.bind(this)}>登陆</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const SignUpForm = Form.create()(SignUp)
export default SignUpForm