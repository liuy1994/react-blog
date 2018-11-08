import React, { Component } from 'react'
import request from '../services/request'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import './signup.less'
const FormItem = Form.Item

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {form: this.props.form}
    }
    signup() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                request.signup(values)
            }
        })
    }
    checkName(event) {
        let userName = event.target.value
        request.checkName(userName).then(data => {
            console.log(data)
        })
    }
    validPassword(rule, value, callback) {
        let password = this.props.form.getFieldValue('password')
        if(!value) {
            callback('Please input your password again!')
        } else {
            if(password !== value) {
                callback('两次密码输入不一致！')
            } else {
                callback()
            }
        }
    }
    formRules = {
        userName: [
            { required: true, message: 'Please input your username!' }
        ],
        password: [
            { required: true, message: 'Please input your password!' }
        ],
        rePass: [
            { required: true, validator: this.validPassword.bind(this)}
        ]
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="signup">
                <Form>
                    <FormItem label="用户名">
                        {getFieldDecorator('userName', { rules: this.formRules.userName })(
                            <Input placeholder="请输入用户名" onBlur={this.checkName.bind(this)}></Input>
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('password', { rules: this.formRules.password })(
                            <Input placeholder="密码"></Input>
                        )}
                    </FormItem>
                    <FormItem label="确认密码">
                        {getFieldDecorator('rePass', { required: true, rules: this.formRules.rePass })(
                            <Input placeholder="再次输入密码"></Input>
                        )}
                    </FormItem>
                    <FormItem label="">
                        <div className="buttons">
                            <Button type="primary" onClick={this.signup.bind(this)}>注册</Button>
                            <Link to="/sign/in">登陆</Link>
                        </div>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const SignUpForm = Form.create()(SignUp)
export default SignUpForm