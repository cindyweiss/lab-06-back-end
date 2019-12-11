'use strict'
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

//routes
app.get('/location', (request, response))
console.log('I am listening on the location route')

// "search_query": "seattle",
// "formatted_query": "Seattle, WA, USA",
// "latitude": "47.606210",
// "longitude": "-122.332071"
// }

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('*', (request, response) => {
  response.status(404).send('page not found');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
