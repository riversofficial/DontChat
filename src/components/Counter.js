import React from 'react'
import './counter.scss'

class Counter extends React.Component {
  getSeconds() {
    return ('0' + this.props.time % 60).slice(-2)
  }
  getMinutes() {
    return ('0' + (Math.floor(this.props.time / 60) % 60)).slice(-2)
  }
  getHours() {
    return ('0' + (Math.floor(this.props.time / 3600) % 24)).slice(-2)
  }
  getDays() {
    let days = Math.floor(this.props.time / 86400).toString()
    return days.length <= 2 ? ('0' + days).slice(-2) : days
  }

  render() {
    return (
      <main className="counter">
        <span>Estamos sem bugs há:</span>
        <h1>
          {this.getDays()}:
          {this.getHours()}:
          {this.getMinutes()}:
          {this.getSeconds()}
        </h1>
      </main>
    )
  }
}

export default Counter
