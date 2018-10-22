import * as React from 'react'
import './Counter.css'

interface Props {
  name: string,
  count: number
}
export default class Counter extends React.Component<Props, object> {
   public render() {
    const { name, count } = this.props
    return <div className="counter">
      Counter {name} : {count}
    </div>
  }
}