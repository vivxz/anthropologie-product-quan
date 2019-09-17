let router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products/:id')
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete)

router
  .route('/products/')
  .post(controller.post)
  .get(controller.getAll)

module.exports = router;