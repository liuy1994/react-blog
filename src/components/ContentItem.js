import React, { Component } from 'react'
import './ContentItem.less'
import request from '../services/request'
class ContentItem extends Component {
  constructor() {
    super()
    this.state = {
      detail: null
    }
  }
  componentDidMount() {
    this.getDetail(1)
  }
  getDetail(id) {
    request.getContentDetail(id).then(data => {
      this.setState({
        detail: data
      })
    })
  }
  render() {
    let { detail } = this.state
    return (
      <div className="content-main">
        <h3>详情</h3>
        <div>{detail && detail.name}</div>
      </div>
    )
  }
}
export default ContentItem