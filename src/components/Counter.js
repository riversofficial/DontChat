import React from 'react'
import './counter.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }

  /*this.getSeconds((state) => ({
    seconds: ('0' + state.timer % 60).slice(-2)
  }))*/

  stopwatch() {
    setInterval(
      this.setState((prevState) => ({
        timer: prevState.timer + 1
      })),
      1000
    )
  }

  render() {
    return (
      <main className="counter">
        <span>Estamos sem bugs há:</span>
        <h1>12:08:21:45</h1>
      </main>
    )
  }
}

export default Counter
