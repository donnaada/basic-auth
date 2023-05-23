'use strict';

const express = require('express');
const router = require('./auth/router');

const notFound = require('./middleware/404');
const serverError = require('./middleware/500');

const app = express();
app.use(express.json());

app.use(router);

//Proof of Life
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the server!');
});

app.use('*', notFound);
app.use(serverError);

const start = (port) => {
  app.listen(port, () =>{
    console.log('Server up on port ' + port);
  });
};

module.exports = { start, app };

