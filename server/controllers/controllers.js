/* eslint-disable import/extensions */
const { db } = require('../models/db.js');

const homePageResponse = (req, res) => {
  res.send('Hello World!');
};

const allData = (req, res) => {
  res.send(db);
};

module.exports = {
  homePageResponse,
  allData,
};
