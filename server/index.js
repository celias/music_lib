const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const port = 3002;

// REQUIRE METHODS FROM CONTROLLER (ENDPOINTS)
const { getTopArtists } = require('./controllers/mainCtrl');

// INITIALIZE EXPRESS
const app = express();

// TOP LEVEL MIDDLEWARES
// cors
app.use(cors());
// bodyParser
app.use(json());

// ENDPOINTS
app.get('/api/getApiData', getTopArtists)


// SERVER SETUP
app.listen(port, () => {
    console.log(`Wake up Neo...you're in: ${port}`);
})


