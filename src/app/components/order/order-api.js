const express = require('express');
const router = express.Router();
const controller = require('./order-controller');

router
  .get('/orders/:id', controller.getOrderById)
  .get('/orders', controller.getOrders)
  .post('/orders', controller.createOrder);

module.exports = router;