/* eslint-disable import/extensions */
const { app } = require('./app.js');
require('dotenv').config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`); // might want to change this in deployment
});
