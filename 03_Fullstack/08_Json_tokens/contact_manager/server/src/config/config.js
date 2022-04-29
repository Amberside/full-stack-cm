// src/config/config.js
// This file will hold all of the config for our server.

module.exports = {
  // Note: process.env.<var_name> will check for an enviromental variable with the name that is specified after .env.
  // Set the port variable
  port: process.env.PORT || 5000,
  // Set up our database configs.
  db: {
    // Database name.
    database: process.env.DB_NAME || 'contact_manager',
    // Database username
    user: process.env.DB_USER || 'root',
    // Database password
    password: process.env.DB_PASS || 'root',
    // Database options
    options: {
      // dialect - refers to the type of database you are connecting to
      dialect: process.env.DIALECT || 'sqlite',
      // host - refers to where the database is hosted.
      host: process.env.HOST || 'localhost',
      // Storage - where you want your database saved to.
      // default value is memory.
      storage: './contact_manager.sqlite',
    }
  },
  // This value will be used later when we set up authentication.
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "HelloiamAsecret"
  }
}
// Note: We should store secrets and other sensitive information in environmental variables. This file will look for the enviromental variables first, or use the default.

