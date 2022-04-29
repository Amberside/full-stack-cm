// src/models.js
// this file will create our database and tables if they do not exist.

// We need this package to intialise our database and create the models for our tables.
const {Sequelize, DataTypes} = require('sequelize');
// Bring in our config file.
const config = require('../config/config');

// Create our db variable
let db = {};

// Create a new Sequelize object, and pass in our database details. This will intialise our database with the options we specified in our config.
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

// Setup Contact model for sequelize.
const Contact = sequelize.define('Contact',
    {
      // This is our primary key..
      // we are using autoIncrement, which the database will add to this and we do not need to pass a value for this when we create a new Contact
      C_id: 
        {type: DataTypes.INTEGER, 
          autoIncrement: true,
          primaryKey: true
        },
        // our data that we wish to store.
      name: {type: DataTypes.STRING},
      email: {type: DataTypes.STRING},
      phone: {type: DataTypes.STRING}
    }
  );

  // Set up a user model for sequelize.
  const User = sequelize.define('User',
  {
    // Primary key.
    U_id: 
      {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: DataTypes.STRING},
      email: { type: DataTypes.STRING,
        allowNull: false, unique: true},
      password: {type: DataTypes.STRING, allowNull: false},
      isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false} 
  });


// Set up access vars.
db.sequelize = sequelize; // This will allow us to access the sequelize object if we use this module
db.Sequelize = Sequelize; // This will allow us to access the Sequelize class if we use this module

// Export the varibles
module.exports = db;
module.exports.Op = Sequelize.Op; // can be used where the model is available
