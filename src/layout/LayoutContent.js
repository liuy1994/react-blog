import React, {Component} from 'react'
import { message, Button } from 'antd'

class Content extends Component {
  test() {
    message.success('This is a message of success')
  }
  render() {
    const {name} = this.props
    return (
      <div className="layout-content">
        <Button type="primary" onClick={this.test.bind(this)}>{name}</Button>
      </div>
    )  
  }
}
export default Content