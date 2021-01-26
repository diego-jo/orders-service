const { v4: uuidv4 } = require('uuid');

const primeRequestContext = (req, res, next) => {
  req.context = {
    traceId: uuidv4()
  };
  next();
};

module.exports = primeRequestContext;