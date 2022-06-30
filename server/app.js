/* eslint-disable import/extensions */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const { router } = require('./routes/home-routes.js');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.setHeader('set-cookie', ['setfromserver']);
});

app.use('/home', router);

module.exports = {
  app,
};
