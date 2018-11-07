import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './ContentInput.less'
class ContentInput extends Component{
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
  }
  modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ]
    }
  }
  // formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image'
  // ]
  cleanContent() {
    this.setState({ text: '' })
    console.log('image')
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
      <div className="content-input">
        <ReactQuill theme="snow"
                    modules={this.modules}
                    value={content}
                    height="300"
                    placeholder='Compose an epic...'
                    onChange={onInput}>
        </ReactQuill>
      </div>
    )
  }
}
export default ContentInput