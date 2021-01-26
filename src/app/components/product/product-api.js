const express = require('express');
const router = express.Router();
const controller = require('./product-controller');

router
  .get('/products/:name', controller.getProductByName)
  .get('/products', controller.getProducts)
  .post('/products', controller.createProduct);

module.exports = router;