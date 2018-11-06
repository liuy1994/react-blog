import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './ContentInput.less'
class ContentInput extends Component{
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
  }
  cleanContent() {
    this.setState({ text: '' })
  }
  imageHandler() {
    console.log('image')
  }
  handleChange(value) {
    this.setState({ text: value })
  }
  render() {
    let { onInput, content } = this.props
    return (
      <ReactQuill
        value={content}
        height="300"
        placeholder='Compose an epic...'
        onChange={onInput} />
    )
  }
}
export default ContentInput