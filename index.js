'use strict';

require('dotenv').config();
const { sequelizeDB } = require('./src/auth/models');
const { start } = require('./src/server');

const PORT = process.env.PORT || 4002;

sequelizeDB.sync()
  .then(() => {
    console.log('Database synced successfully');
    start(PORT);
  })
  .catch((error) => console.error(error));
