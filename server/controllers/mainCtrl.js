const axios = require('axios');
const { apiKey, clientSecret } = require('./../config.js');

let savedMusic = [];

const getTopArtists = (req, res, next) => {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`)
    .then(response => {
       
        return res.json(response.data);
    }).catch(console.log);
};

const getSavedMusic = (req, res, next) => {
    let newSavedMusic = {
        savedArt
    }
    res.status(200).json(newSavedMusic)
}

const postSavedMusic = (req, res, next) => {
    savedMusic.push(req.body)
    res.status(200).json(SavedMusic);
};

module.exports = {
    getTopArtists,
    getSavedMusic,
    postSavedMusic
};