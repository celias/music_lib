import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import ArtistCard from './components/ArtistCard/ArtistCard';
import SavedMusic from './components/SavedMusic/SavedMusic';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      topArtists: [],
      randomTopArtist: {}
    }
    // BIND or ARROW FUNC
    this.artistInfo = this.artistInfo.bind(this);
    this.randomTopArtist = this.randomTopArtist.bind(this);
    
   
  }

  // LIFECYCLE HOOK
  componentDidMount() {
    axios.get('/api/getApiData')
    .then(response => {
      return this.setState({topArtists: response.data.artists.artist}, () => this.randomTopArtist())
    });
  };

  artistInfo(url) {
    window.location.href = `${url}`
  }

  randomTopArtist(value) {
    this.setState({ randomTopArtist: this.state.topArtists[Math.floor((Math.random() * 50))] }) 
  }




  render() {
    console.log("MainAppComponent Api Data/STATE: ", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <select className="selectBox" onChange={(event) => this.artistInfo(event.target.value)}>
          {this.state.topArtists[0] &&
            this.state.topArtists.map((curr, i) => {
              return (
                <option key={i} value={curr.url}>{curr.name}</option>
              )
            })}

        </select>

        <ArtistCard musicArtist={this.state.randomTopArtist} />

            <button className="randomArtistBtn" onClick={() => this.randomTopArtist()}>Random Artist</button>

            <SavedMusic />
            
     
      </div>
    );
  }
}

export default App;
