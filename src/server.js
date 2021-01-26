const { env } = require('./configs');
const createApp = require('./app');
const app = createApp(env);

const status = () => {
  // console.info(`${env.appName} started.`);
  console.info(`[INFO] Port: ${env.apiPort} - Environment: ${env.environment}`);
};

const start = () => {
  app.listen(env.apiPort, status);
};

start();

module.exports = start; 