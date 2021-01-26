const mongoose = require('mongoose');

const mongoConnection = async (env) => {
  const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  };

  try {
    await mongoose.connect(`mongodb+srv://${env.mongodbUser}:${env.mongodbPass}@${env.mongodbUrl}/${env.mongodbDatabase}`, options);
    console.log('[INFO] Database connection established.');
  } catch (error) {
    console.error(`[ERROR] Unable to connect to database: ${error}`);
    process.exit(1);
  }
};

module.exports = mongoConnection;