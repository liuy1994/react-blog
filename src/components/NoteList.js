import React, { Component } from 'react'
import request from '../services/request'
import NoteItem from './NoteItem'
import { Form, Input, Button, Modal } from 'antd'
const FormItem = Form.Item
class NoteList extends Component {
  constructor() {
    super()
    this.state = {
      notelist: [],
      visible: false
    }
  }
  getNoteList() {
    request.getNoteList().then((data) => {
      this.setState({
        notelist: data.list.map(t => {
          return <NoteItem key={t.id} name={t.name} id={t.id} />
        })
      })
    })
  }
  showAddNoteModal() {
    this.setState({
      visible: true
    })
  }
  addItem(name) {
    request.addNoteItem(name).then(() => {
      this.setState({
        visible: false
      })
    })
  }
  confirmAdd() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.addItem(values.name)
      }
    })
  }
  cancelAdd() {
    this.setState({
      visible: false
    })
  }
  inputName() {
    setTimeout(() => {
      console.log(this.state)
    }, 3000);
    // this.props.form.setFieldsValue({
    //   name: event.target.value
    // })
  }
  componentDidMount() {
    this.getNoteList()
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { notelist, name, visible } = this.state
    return (
      <div>
        <p>笔记本列表</p>
        <Button type="primary" onClick={this.showAddNoteModal.bind(this)}>新增笔记本</Button>
        <ul>{notelist}</ul>
        <Modal visible={visible} title="新增笔记本" onOk={this.confirmAdd.bind(this)} onCancel={this.cancelAdd.bind(this)}>
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('name', {
                initialValue: name,
                rules: [{ required: true, message: 'Please input your note name!', }],
              })(<Input placeholder="请输入笔记本名称" type="text"></Input> )}
            </FormItem>
          </Form>
        </Modal>
      </div> 
    )
  }
}
const WrappedNoteList = Form.create()(NoteList)
export default WrappedNoteList