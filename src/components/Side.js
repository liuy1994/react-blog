import React, {Component} from 'react'
import NoteList from './NoteList'
import './Side.less'
class Side extends Component {
  render() {
    return (
      <div className="content-side">
        <NoteList></NoteList>
      </div>
    )
  }
}
export default Side