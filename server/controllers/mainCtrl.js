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
    console.log("BODY", req.body, req.params)
    let newSavedMusic = {
        savedMusic
    }
    res.send(newSavedMusic);
}

const postFavoriteArtists = (req, res, next) => {
    savedMusic.push(req.body, req.params);
    res.send(savedMusic);
};

module.exports = {
    getTopArtists,
    getSavedMusic,
    postFavoriteArtists
};