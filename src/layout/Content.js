import React, {Component} from 'react'
import './Content.css'
import Side from '../components/Side'
import Main from '../components/Main'
import About from '../components/About'

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Side></Side>
        <Main></Main>
        <About></About>
      </div>
    )
  }
}
export default Content