import React, { Component } from 'react'
import './ContentItem.less'
import request from '../services/request'
import { Spin } from 'antd';
class ContentItem extends Component {
  constructor() {
    super()
    this.state = {
      detail: null
    }
  }
  componentDidMount() {
    let {id} = this.props.match.params
    this.getDetail(id)
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
      {
          detail ? 
            <div>
              <h1>{detail.name}</h1>
              <h2>{detail.brief}</h2>
              <div className="item-content" dangerouslySetInnerHTML={{
                __html: detail.content
              }} />
            </div> : 
            <Spin tip="Loading..." />
      }
        
      </div>
    )
  }
}
export default ContentItem