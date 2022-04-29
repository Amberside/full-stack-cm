// src/config/config.js
// This file will hold all of the config for our server.
//  4. Create our export. This will let us import our config and use it elsewhere in our application.
module.exports = {
  // Note: process.env.<var_name> will check for an enviromental variable with the name that is specified after .env.
  // 5. Set the port variable
  port: process.env.PORT || 5000,
  // 6. Set up our database configs.
  db: {
    // 7. Database name.
    database: process.env.DB_NAME || 'contact_manager',
    // 8. Database username
    user: process.env.DB_USER || 'root',
    // 9. Database password
    password: process.env.DB_PASS || 'root',
    // 10. Database options
    options: {
      //11. dialect - refers to the type of database you are connecting to
      dialect: process.env.DIALECT || 'sqlite',
      // 12. host - refers to where the database is hosted.
      host: process.env.HOST || 'localhost',
      // 13. Storage - where you want your database saved to.
      // default value is memory.
      storage: './contact_manager.sqlite',
    }
  },
  // 14. This value will be used later when we set up authentication.
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "HelloiamAsecret"
  }
}
// Note: We should store secrets and other sensitive information in environmental variables. This file will look for the enviromental variables first, or use the default.

// 15. Open server.js