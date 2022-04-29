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

  // 2. Set up a user model for sequelize.
  const User = sequelize.define('User',
  {
    // 3. Primary key.
    U_id: 
      {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      // 4. set up the name
      name: { type: DataTypes.STRING},
      // 5. Set the email to be unique
      email: { type: DataTypes.STRING,
        allowNull: false, unique: true},
      // 6. Set password allowNull to false as this will allow us to have password as a required field
      password: {type: DataTypes.STRING, allowNull: false},
      // 7. This field we will use later, and is set up to be false by default
      isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false} 
  });


// Set up access vars.
db.sequelize = sequelize; // This will allow us to access the sequelize object if we use this module
db.Sequelize = Sequelize; // This will allow us to access the Sequelize class if we use this module

// Export the varibles
module.exports = db;
module.exports.Op = Sequelize.Op; // can be used where the model is available
