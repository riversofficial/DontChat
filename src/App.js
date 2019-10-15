import React from 'react'
import './App.scss'
import Counter from './components/Counter.js'
import Credits from './components/Credits.js'
import Notifies from './components/Notifies.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      info: {
        lastBug: 'Login não funciona',
        recordTime: '00:41:36:14',
        reportType: 'Slack'
      }
    }
  }

  start() {
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    },1000)
  }

  componentDidMount() {
    this.start()
  }

  render() {
    return (
      <div className="App">
        <Counter time={this.state.time} />
        <Notifies info={this.state.info}/>
        <Credits />
      </div>
    )
  }
}

export default App;
