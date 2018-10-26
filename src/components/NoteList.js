import React, { Component } from 'react'
import request from '../services/request'
import NoteItem from './NoteItem'
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
          return <NoteItem key={t.id} name={t.name} />
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