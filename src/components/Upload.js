import React, { Component } from 'react'
import { Icon, Upload, Button, } from 'antd'
import request from '../services/request'
import './Upload.less'
class UploadInstance extends Component {
  uploadProps = {
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload(file) {
      request.upload(file)
      return false
    }
  }
  render() {
    return (
      <Upload ref={button => this.button = button} className="upload-instance" {...this.uploadProps}>
        <Button><Icon type="upload" /> Click to Upload </Button>
      </Upload>
    )
  }
}
export default UploadInstance