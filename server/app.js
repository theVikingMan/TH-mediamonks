/* eslint-disable import/extensions */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const { router } = require('./routes/home-routes.js');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', router);

module.exports = {
  app,
};
