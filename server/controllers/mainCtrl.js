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
   axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`)
   .then(response => {
       return res.json(response.data);
   }).catch(console.log)
}

const postToFav = (req, res, next) => {
    axios.post([req.params.id, req.body.id])
    .then(response => {res.status(200).send})
    .catch((err) => {res.status(500).send})
}



module.exports = {
    getTopArtists,
    getSavedMusic,
    postToFav
};