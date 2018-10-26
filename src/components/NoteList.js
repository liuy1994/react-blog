import React, { Component } from 'react'
import request from '../services/request'
class NoteList extends Component {
  constructor() {
    super()
    this.state = {
      notelist: []
    }
  }
  getNoteList() {
    request.getNoteList().then(data => {
      this.setState({
        notelist: data.list.map(t => {
          return <li key={t.id}>{t.name}</li>
        })
      })
    })
  }
  componentDidMount() {
    this.getNoteList()
  }
  render() {
    const { notelist } = this.state
    return (
      <ul>{notelist}</ul>
    )
  }
}
export default NoteList