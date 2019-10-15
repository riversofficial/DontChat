import React from 'react'
import './counter.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }

  getSeconds() {
    return ('0' + this.state.timer % 60).slice(-2)
  }
  getMinutes() {
    return ('0' + (Math.floor(this.state.timer / 60) % 60)).slice(-2)
  }
  getHours() {
    return ('0' + (Math.floor(this.state.timer / 3600) % 24)).slice(-2)
  }
  getDays() {
    return ('0' + Math.floor(this.state.timer / 86400)).slice(-2)
  }

  start() {
    setInterval(() => {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    },1000)
  }

  render() {
    return (
      <main className="counter">
        <span>Estamos sem bugs há:</span>
        <h1>{this.getDays()}:{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h1>
      </main>
    )
  }
}

export default Counter
