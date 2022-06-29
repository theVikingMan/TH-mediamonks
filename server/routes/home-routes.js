/* eslint-disable import/extensions */
const Router = require('express-promise-router');

const router = new Router();
const controller = require('../controllers/controllers.js');

router.get('/home', controller.homePageResponse);
router.get('/db', controller.allData);

module.exports = {
  router,
};
