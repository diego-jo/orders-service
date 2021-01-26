const pkg = require('../../package.json');
const dotenv = require('dotenv');
const envContent = dotenv.config();

if (process.env['NODE_ENV'].toLowerCase() === 'local' && envContent.error) {
  console.log(`[ERROR] env failed to load: ${envContent.error}`);
  process.exit(1);
}

const requireFromEnv = (key) => {
  if (!process.env[key]) {
    console.error(`[APP ERROR] Missing environment variable ${key}`);
    process.exit(1);
  }
  
  return process.env[key];
};

module.exports = {
  appName: requireFromEnv('APP_NAME'),
  apiVersion: requireFromEnv('API_VERSION'),
  environment: requireFromEnv('NODE_ENV'),
  apiPort: parseInt(requireFromEnv('API_PORT'), 10),
  mongodbDatabase: requireFromEnv('MONGODB_DATABASE'),
  mongodbUser: requireFromEnv('MONGODB_USER'),
  mongodbPass: requireFromEnv('MONGODB_PASS'),
  mongodbUrl: requireFromEnv('MONGODB_URL'),
  mongodbPort: requireFromEnv('MONGODB_PORT'),
  version: pkg.version
};