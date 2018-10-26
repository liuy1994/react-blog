import React, { Component } from 'react'
class NoteList extends Component {
  constructor() {
    super()
    this.state = {
      notelist: [
        {
          id: 1,
          name: 1111
        },
        {
          id: 2,
          name: 22222
        }, {
          id: 3,
          name: 3333
        }
      ],
      list: []
    }
  }
  getNoteList() {
    console.log('getNoteList')
  }
  componentDidMount() {
    // this.getNoteList().then(data => {
    //   this.notelist = data.list.map(t => {
    //     return <li key={t.id}>{t.name}</li>
    //   })
    // })
    this.setState({
      list: this.state.notelist.map(t => {
        return <li key={t.id}>{t.name}</li>
      })
    })
  }
  render() {
    return (
      <ul>{this.state.list}</ul>
    )
  }
}
export default NoteList