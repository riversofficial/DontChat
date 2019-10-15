import React from 'react'
import './App.scss'
import Counter from './components/Counter.js'
import Credits from './components/Credits.js'
import Notifies from './components/Notifies.js'

function App() {
  return (
    <div className="App">
      <Counter />
      <Notifies />
      <Credits />
    </div>
  )
}

export default App;
