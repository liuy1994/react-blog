import React, { Component } from 'react'
import request from '../services/request'
import { Form, Input, Button, Switch } from 'antd'
import './ContentEdit.less'
import ContentInput from './ContentInput'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
const FormItem = Form.Item

class AddForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            brief: '',
            content: '',
            id: ''
        }
    }
    saveItem() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                request.saveContentItem({ ...values, id: this.state.id, noteId: this.props.selectedNoteId}).then(() => {
                    window.location.href = '/#/list'
                })
            }
        })
    }
    getDetail(){
        let { id } = this.props.match.params
        request.getContentDetail(id).then(data => {
            console.log(data)
            this.setState({
                name: data.name,
                brief: data.brief,
                content: data.content,
                id: data.id
            })
        })
    }
    inputContent(content) {
        this.setState({
            content
        })
    }
    componentWillMount() {
        if(this.props.match.path !== '/add') this.getDetail()
    }
    
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20, align: "left" },
        }
        let { name, brief, content} = this.state
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
                        })(<ContentInput noteId={this.props.selectedNoteId} content={content} onInput={this.inputContent.bind(this)}/>)}
                    </FormItem>
                    <FormItem label="直接发布" {...formItemLayout}>
                        {getFieldDecorator('publish', {
                            initialValue: true
                        })( <Switch defaultChecked />)}
                    </FormItem>
                    <FormItem label="">
                        <Link to='/list'><Button className="back-button">返回</Button></Link>
                        <Button type="primary" onClick={this.saveItem.bind(this)}>保存</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const MainAdd = Form.create()(AddForm)
const mapStateToProps = (state) => {
  return {
    selectedNoteId: state.selectedNoteId
  }
}
export default connect(mapStateToProps)(MainAdd)