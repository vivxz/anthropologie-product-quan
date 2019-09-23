let router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/products/:id')
  .get(controller.get)
  // .put(controller.put)
  // .delete(controller.delete)

router
  .route('/productRandom')
  .get(controller.getRandom)

// router
//   .route('/products/')
//   .get(controller.getAll)
//   .post(controller.post)

module.exports = router;