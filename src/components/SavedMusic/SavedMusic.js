import React, { Component } from 'react';
import axios from 'axios';
import ArtistCard from '../ArtistCard/ArtistCard';

class SavedMusic extends Component {
    constructor(props){
        super(props);

        this.state = {
            savedMusic: [],
            savedMusicList: []
        }
        // this.addToMyFavorites = this.addToMyFavorites.bind(this);
    }

    componentDidMount(){
      axios.get('/api/getSavedMusic').then(response => {
          console.log("THIS IS SAVED: ", response)
          this.setState({
              savedMusic: response.data.savedMusic
          })
      })
    }

    addToMyFavorites = (item) => {
        axios.post('/api/postFavoriteArtists')
        console.log("WHOLE FAVORITE")
    }

    render(){
  console.log(this.state, "State motherfucker")
        return(
            <div>
                <button onClick={() => this.addToMyFavorites()}>FAVORITE</button>
                <h1>SAVED MUSIC</h1>
                </div>
        )
    }
}
export default SavedMusic;
