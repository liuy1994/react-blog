import React, {Component} from 'react';
class NoteItem extends Component {
  render() {
    let {name} = this.props
    return (
      <li>{name}</li>
    )
  }
}
export default NoteItem