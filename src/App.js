import React, { Component } from 'react'
import logo from './images/logoRussia2018.jpg'
import './App.css'
import { CountrySearch } from './components/countrySearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CountrySearch></CountrySearch>
      </div>
    )
  }
}

export default App
