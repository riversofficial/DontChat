import React from 'react'
import './notifies.scss'

class Notifies extends React.Component {
  render() {
    return (
      <section className="notifies">
        <div className="notifies-card">
          <h1>Último bug:</h1>
          <span>{this.props.info.lastBug}</span>
        </div>
      </section>
    )
  }
}

export default Notifies
