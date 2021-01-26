const { primeRequestContext } = require('../middlewares');
const bodyParser = require('body-parser');

const mountMiddlewares = (app) => {
  app.use(bodyParser.json());
  app.use(primeRequestContext);
};

module.exports = mountMiddlewares;