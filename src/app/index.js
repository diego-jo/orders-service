const express = require('express');
const { mountRoutes, mountMiddlewares } = require('./utils');
const { mongoConnection } = require('../configs');

const createApp = (env) => {
  const app = express();

  mountMiddlewares(app);
  mountRoutes(app, env);
  mongoConnection(env);

  return app;
};

module.exports = createApp;