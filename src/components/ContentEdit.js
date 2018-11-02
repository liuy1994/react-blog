import React, { Component } from 'react'
import request from '../services/request'
import { Form, Input, Button, Switch } from 'antd'
import './ContentEdit.less'
const FormItem = Form.Item
const TextArea = Input.TextArea

class AddForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            brief: '',
            content: '',
            publish: true
        }
    }
    addItem(name) {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                request.addContentItem(values).then(() => {
                    this.props.showContentList()
                })
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20, align: "left" },
        }
        let { name, brief, content, publish} = this.state
        const { match } = this.props
        return (
            <div className="content-edit-form">
                <h3>{match.params.id ? '编辑' : '新增'}博文</h3>
                <Form layout="vertical">
                    <FormItem label="名称">
                        {getFieldDecorator('name', {
                            initialValue: name,
                            rules: [{ required: true, message: 'Please input your blog name!', }],
                        })(<Input placeholder="请输入名称"></Input> )}
                    </FormItem>
                    <FormItem label="简介">
                        {getFieldDecorator('brief', {
                            initialValue: brief,
                            rules: [{ required: true, message: 'Please input your brief!', }],
                        })(<Input placeholder="请输入简介"></Input> )}
                    </FormItem>
                    <FormItem label="正文">
                        {getFieldDecorator('content', {
                            initialValue: content,
                            rules: [{ required: true, message: 'Please input your content!', }],
                        })(<TextArea placeholder="请输入正文" rows="10"></TextArea> )}
                    </FormItem>
                    <FormItem label="直接发布" {...formItemLayout}>
                        {getFieldDecorator('publish', {
                            initialValue: publish
                        })( <Switch defaultChecked />)}
                    </FormItem>
                    <FormItem label="">
                        <Button type="primary" onClick={this.addItem.bind(this)}>保存</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const MainAdd = Form.create()(AddForm)
export default MainAdd