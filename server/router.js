let router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products/:id')
  .get(controller.get)

module.exports = router;