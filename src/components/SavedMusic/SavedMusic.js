import React, { Component } from 'react';
import axios from 'axios';
import SavedMusicCard from './SavedMusicCard';

class SavedMusic extends Component {
    constructor(props){
        super(props);

        this.state = {
          savedMusic: [],
          mySavedMusic: []
        }

    //    this.mySavedMusic = this.mySavedMusic.bind(this);
       this.saveClick = this.saveClick.bind(this);
    }

    componentDidMount(){
      axios.get('/api/getSavedMusic/').then(response => {
          this.setState({ savedMusic: response.data })
        })
    }
    
    // mySavedMusic(value){
        //     this.setState({ mySavedMusic: this.state.savedMusic })
        // }
        
        saveClick(id){
            axios.post(`/api/addToFav/${id}`)
        }
        
        
        
        
        
        
        render(){
            console.log("THIS IS SAVED: ", this.state.savedMusic)
        
            return (
                <div>
                    {this.state.savedMusic &&
                        this.state.savedMusic.map((curr, i) => {
                            return (
                                <div key={i} value={curr}>
                                <button onClick={()=> this.saveClick(this.state.savedMusic[0].id)}>Click</button>
                                </div>
                            )
                        })
                    }
                    </div>
           
            )
        
        }
    }

export default SavedMusic;
