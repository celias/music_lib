import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      topArtists: [],

    }
    // BIND or ARROW FUNC

  }

  // LIFECYCLE HOOK
  componentDidMount() {
    axios.get('/api/getApiData')
    .then(response => {
      return this.setState({topArtists: response.data})
    })
  }
  render() {
    console.log("Api Data/STATE: ", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
