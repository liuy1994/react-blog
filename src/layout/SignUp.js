import React, { Component } from 'react'
import request from '../services/request'
import { Form, Input, Button } from 'antd'
import './signup.less'
const FormItem = Form.Item

class SignUp extends Component {
    signup() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                request.signup(values)
            }
        })
    }
    checkName(event) {
        let name = event.target.value
        request.checkName(name).then(data => {
            console.log(data)
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="signup">
                <Form>
                    <FormItem label="用户名">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your name!', }],
                        })(<Input placeholder="请输入用户名" onBlur={this.checkName.bind(this)}></Input> )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!', }],
                        })(<Input placeholder="密码"></Input> )}
                    </FormItem>
                    <FormItem label="">
                        <Button type="primary" onClick={this.signup.bind(this)}>保存</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const SignUpForm = Form.create()(SignUp)
export default SignUpForm