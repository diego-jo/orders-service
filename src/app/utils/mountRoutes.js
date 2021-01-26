const { orderApi } = require('../components/order');
const { productApi } = require('../components/product');
const express = require('express');
const router = express.Router();

const routes = [orderApi, productApi];

const mountRoutes = (app, env) => {
  router.use(`/api/${env.apiVersion}`, routes);
  app.use(router);
};
 
module.exports = mountRoutes;