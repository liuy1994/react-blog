import * as React from 'react'
import './App.css'
import Counter from './coms/Counter'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Counter name={'counter233'} count={1} />
      </div>
    )
  }
}

export default App
