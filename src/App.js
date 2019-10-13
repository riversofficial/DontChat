import React from 'react'
import time from './time.js'
import './App.scss'

function App() {
  return (
    <div className="App">
      <main className="App-counter">
        <span>Estamos sem bugs há:</span>
        <h1>12:08:21:45</h1>
      </main>

      <section className="App-notifies">
        <div></div>
        <div></div>
      </section>

      <footer className="App-credits">
        <span>
          Made with &hearts; by <a href="http://github.com/riwersxd" target="_blank">riwersxd</a>
        </span>
      </footer>
    </div>
  )
}

export default App;
