import React, { Component } from 'react';
import request from '../services/request';
import { Button, Modal } from 'antd'
class NoteItem extends Component {
  deleteItem() {
    console.log(this.props.id)
    request.deleteNoteItem(this.props.id)
  }
  confirmDetele() {
    Modal.confirm({
      title: '提示',
      content: '确认删除?',
      onOk: this.deleteItem.bind(this)
    })
  }
  render() {
    let {name} = this.props
    return (
      <li>{name}<Button type="danger" onClick={this.confirmDetele.bind(this)}>删除</Button></li>
    )
  }
}
export default NoteItem